import React, { KeyboardEvent, useEffect, useState } from 'react'

import { Input, Tag } from 'antd'

const TagInput: React.FC<{ onChange?: (list: string[]) => void; value?: string[] }> = ({ onChange, value }) => {
  const [tags, setTags] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    const newValue = inputValue.trim()
    if (newValue && !tags.includes(newValue)) {
      const res = [...tags, newValue]
      setTags(res)
      onChange?.(res)
    }
    setInputValue('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleInputConfirm()
    }
  }

  const handleClose = (removedTag: string) => {
    setTags(tags.filter((tag) => tag !== removedTag))
  }

  useEffect(() => {
    setTags(value || [])
  }, [value])

  return (
    <div className="min-h-[32px] flex flex-wrap items-start gap-[8px] py-[8px] px-[6px] border border-solid border-[#d9d9d9] rounded-[6px] bg-[#fff]">
      {tags.map((tag) => (
        <Tag
          key={tag}
          closable
          className="whitespace-pre-wrap !mr-0"
          style={{ display: 'block' }}
          onClose={() => handleClose(tag)}
        >
          {tag}
        </Tag>
      ))}
      <input
        className="border-none shadow-none min-w-[100px] flex-1 bg-transparent p-0 focus:outline-none"
        placeholder=""
        value={inputValue}
        onBlur={handleInputConfirm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default TagInput
