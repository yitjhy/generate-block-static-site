import { parseDocument } from 'htmlparser2'
import * as domSerializer from 'dom-serializer'
import { useEffect, useState } from 'react'

const copySvgDom = parseDocument(
  `<img width="14" 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8BAgIAAAClpaW8vLz5+fkiIiJPUFBxcXHm5uapqanq6urBwcFTVFReXl7y8vLPz8/Z2dlISUl6enpra2s9PT2enp6GhoYWFhYaGhrHyMi0tLQ0NDSPj48qKipDQ0PySJVbAAABUUlEQVRoge3Y606DQBAF4OUmZWGplrYqVPv+bym4JbHAtufQSUx0zj+S4cuGy052jNH8esoqBVOVJF24mEhN8elwSwRmqH3G7RdcHn187TvS7vUatQvaJpZu48sNWHxtBeKJr29sAsTufXXK4eBa7CocLOeqFVdc8Vkuf2j7AN7WNzeuq23O3do45ni25zqT2xJ4znamQwbjR74zvcI421KHRxNa+hRvx26Dd6bwtzbFU3/99gTl3VcnHG5Dj/E61So8VD7JnWrFFVdcccUVV1xxxf8CbsviO6WVxGeTokgQbxcPEkL48jFFCu+WdCncNAu6GG6O0fwIJYabrW02Y5zkpzjNnSPUY7joH6q44v8YlxmJBPCTy4G4A4evGkN1IJ6tGaCFJ4uTfPB4g9rGnEg9/oQX3reOnBu3ngvc7tPl6PvsaRsctoaSwWFljeZHvgDY6Bdbu3MysgAAAABJRU5ErkJggg==" />`
)
const copySvgAst = copySvgDom.children
const discountList: string[] = []
const useConvertDiscount2html = (discountHtml: string) => {
  const [html, setHtml] = useState(discountHtml)
  function convertDisToSpan(nodes: any[]) {
    return nodes.map((node) => {
      if (node.type === 'tag') {
        if (node.name === 'dis') {
          const textContent = node.children[0]?.data || ''
          discountList.push(textContent)
          return {
            type: 'tag',
            name: 'span',
            attribs: { class: 'markdown-discount-item-wrapper', style: 'position:relative' },
            children: [
              {
                type: 'tag',
                name: 'span',
                attribs: {
                  class: 'markdown-discount-text',
                  style: 'background: #e2f6ff; padding: 6px 14px; border-radius: 6px;',
                },
                children: [{ type: 'text', data: textContent }],
              },
              {
                type: 'tag',
                name: 'span',
                attribs: {
                  class: textContent,
                  style:
                    'color:#FF6600;cursor:pointer;margin-left:8px;position:absolute;top:-8px;font-size:16px; width:15px',
                },
                children: [copySvgAst[0]],
              },
            ],
          }
        }
        if (node.children) {
          node.children = convertDisToSpan(node.children)
        }
      }
      return node
    })
  }

  const getHtml = () => {
    if (discountHtml) {
      setHtml(discountHtml)
      const document = parseDocument(discountHtml)
      const body = document.children
      const convertedDom = convertDisToSpan(body)
      const outputHtml = domSerializer.default(convertedDom, { encodeEntities: false })
      setHtml(outputHtml)
      return outputHtml
    }
  }
  useEffect(() => {
    if (discountHtml) {
      setHtml(discountHtml)
      const document = parseDocument(discountHtml)
      const body = document.children
      const convertedDom = convertDisToSpan(body)
      const outputHtml = domSerializer.default(convertedDom, { encodeEntities: false })
      setHtml(outputHtml)
    }
  }, [discountHtml])
  return { html, getHtml, discountList: Array.from(new Set(discountList)) }
}

export default useConvertDiscount2html
