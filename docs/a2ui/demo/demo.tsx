import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Input, Typography } from 'antd'

import type { ActionPayload, XAgentCommand_v0_9 } from '@ant-design/x-card'
import { XCard } from '@ant-design/x-card'

import { buildInitialCommands, buildOrderCommands, buildSummaryCommands } from './commands'
import X_CARD_COMPONENTS from './components'

const { Title } = Typography

export default function A2uiXCardPage() {
  const [commands, setCommands] = useState<XAgentCommand_v0_9[]>(() => buildInitialCommands())
  const [inputValue, setInputValue] = useState<string>(() => JSON.stringify(buildInitialCommands(), null, 2))
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => clearTimer, [clearTimer])

  const surfaceIds = useMemo(() => {
    const ids: string[] = []
    const removed = new Set<string>()
    commands.forEach((command) => {
      if ('createSurface' in command) {
        const { surfaceId } = command.createSurface
        removed.delete(surfaceId)
        if (!ids.includes(surfaceId)) ids.push(surfaceId)
      }
      if ('deleteSurface' in command) {
        removed.add(command.deleteSurface.surfaceId)
      }
    })
    return ids.filter((id) => !removed.has(id))
  }, [commands])

  const handleInputChange = useCallback((text: string) => {
    setInputValue(text)
    let parsed: unknown
    try {
      parsed = JSON.parse(text)
    } catch {
      return
    }
    if (Array.isArray(parsed)) setCommands(parsed as XAgentCommand_v0_9[])
  }, [])

  const handleAction = useCallback((payload: ActionPayload) => {
    if (payload.name === 'submit') {
      setCommands((prev) => [...prev, ...buildSummaryCommands(payload.context)])
    }
    if (payload.name === 'query_order') {
      setCommands((prev) => [...prev, ...buildOrderCommands(payload.context)])
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col gap-[16px] p-[8px]">
      <header className="flex items-start justify-between gap-[16px]">
        <div className="min-w-0">
          <Title className="!mb-[4px] !mt-0" level={3}>
            A2UI · @ant-design/x-card 2.9.0
          </Title>
        </div>
      </header>

      <div className="flex items-stretch gap-[16px]">
        <section className="flex min-h-[500px] w-[35%] shrink-0">
          <Input.TextArea
            className="min-w-0 w-full font-mono text-[12px] !bg-[#f8f8f8] !text-[#000]"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
            placeholder="粘贴 XAgentCommand JSON 数组..."
          />
        </section>
        <section className="min-w-0 flex-1">
          <XCard.Box key={1} commands={commands} components={X_CARD_COMPONENTS} onAction={handleAction}>
            <div className="flex flex-col gap-[16px]">
              {surfaceIds.map((surfaceId) => (
                <XCard.Card key={surfaceId} id={surfaceId} />
              ))}
            </div>
          </XCard.Box>
        </section>
      </div>
    </div>
  )
}
