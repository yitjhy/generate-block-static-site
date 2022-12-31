import React, { FC, useState } from 'react'
import { Divider, Tooltip } from 'antd'
import './index.css'
import HighlightCode from './../../components/hightCode'

type TemplateProps = {
  children: React.ReactNode
  code: string
}

const Template: FC<TemplateProps> = ({ children, code }) => {
  const [isShowCode, setIsShowCode] = useState(false)
  return (
    <div className="template">
      <div className="templateWrapper">
        <div className="example">{children}</div>
        <Divider dashed />
        <div className="operationWrapper">
          <Tooltip placement="top" title={!isShowCode ? '显示代码' : '收起代码'}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://codesandbox.io/api/v1/sandboxes/define?parameters=N4IgZglgNgpgziAXKADgQwMYGs0HMYB0AVnAPYB2SoGFALjObVSACYwoNvkYTzMBOMTE0QgoaenCYAaEIOEBaFqQC2SMRPgy5QjLQU1GMAB60VDAK7rxk7VICesFgdUoKDWglE2tIWQAFaew44AHp5PWtNKT8QQOD4cN19ZTVvaO14kNCHJxcVN3IPLw1bEABfStk2FVICT2NmQ3pGdQgC0n5aAAIAFTQAIzhpbuA-wbgASXoVAAV-UhQ4bvLusAWVboByAlCaDqLGMNoJrYAdbgopboARGFrugF5ugAoASieAPlGL7u7Da4nIY3CRoRDjIbTe7zRZwADaAF0nt04b8_j9yOj0VgYPZwVsMJpcJ1eHAttI0VjxAMYFB8b1Ft0AMJEknwcmU9EYAAW0BYgnI4JenKxAB5PiKsd1RSwIAA3T4MlDM1n8Ul9Rks-jEtXwDXKrUwHWk0WhWUKyVi82KzWq9VKlXatnLB2G43wU3Wy3omXym0Gu1612Bl22p26uCev3ev6-hXB8P2sNG536x0piNRi2YqVWv0JjNJgOJoPJ92Rs3RnO500S6vot4U-vlJtY4CSnF47ZwNCwMmtqXU2n0xkAZV77IHWJ5fIFQu94pj0utDvHfbTa9Lys3oe3E933R3Wbrubz8bH-43l9X14v65vfePS7j_sPt7397vW7fn4_Hsr2anj6K5fgeO5Xr-P7fkeAEnkBy75qBEHQe-UFgfuT71mKoRwVijaci2nLtlh3SdvipAAO5FPw_aSkOdLbA6ADyVEwDRHIkTOUD8gw84kbGuGni-zGsTRaYsdRB4SWxUmibJkmYfBCHnsq0liSJkniXJWmaRpMmKfBwmMmp8kyTpZl6epxlyQZQFGap2mWaZVkObp1kKbBz4ga5Fnub5Pkud0JnmTRtlSrWkr4c2U4YrmZHbLgaAQJJHG5vRI7KgA4klKUxX8XE8YKrwLoJNbed02XJf5FU5dVlVuVltWBfV-mefxwGIY1VXNU1B4tT13V9b1YVlZ1NWDWm_VDRNDpTZNw1tUp9njQ1K11b180zYyU0jeF5VzbNG2HVtXWrTti1CThkUxYROYImigi0BY_CYsK9aLiRor9EM3qhKE3RsGAaAWFAtDfY8BIhuc7UQDMcCPMAQJwCCJzlN6FBMtyaDkPgCMvCwoIfI83zEUpAKkLABBQKQuD44T3qVJKV3vczfxvBcaNFMYbhdADMBAyDPR3LUFwVLI-yFMUoRI_UcCNMgIDNB4bQdLzuQwCwawbN2QR5BL7hHND7Q8z0ABKyQjGMFhwDAo4nPQIzWzAACiYBgDAegjAAYkyKxa6o2wRLQ0MXACPTfXATJ0B4ADq_BoCgHD8Mi6ssAQ5oAAZohREAsLQ3LggAjAADMXACkADcFxZ-QodXOHExxwnScp7rGvp_KNd_LKcAoOIXZgLAxhVzmbhwLDEAUOCgg2PKMAjzXdfkNcEdQpszypx3cqimMECR9yHs4iw4IDKQFNCJi5SfF3ax0Ao6vguQnQqL2I9_GAd8UTAEC4NytDggAFlLm_W-jB74QAAF4wCLgAlAw80RQCqgoA-P8_7ggAEzFzgSA-gpgFC0HjsvD-_AVDgkJCgWGvZIHzzRDQam_BwQABJgAvF3vvQ-GsVhE2-C8PemMOGawAPzbAAMSFwAGwAHZJFuy2N0fEIj0EAFZlHKK2G8coOCTD6DgFjZQFFwTF26EY4uBBlFwP-M9AUtA6GdBAS_fguBkoKDVL_f-3QVHYNoc9MgDDuhuGSvQfgODCHj1oJPIqvYoDdEQUUNAydTGFyUXAEBTt-D31pB7dxT8iggPQCwWUONDHdAABxeJzD3PuaAB5DxAVQ3A5AFCw3uHAMhHg2IgIAGSIG5KQOUbFYpcgpp0cEYipEyLACAzmi9LjLx6AAGSqq3Rw7dzQ7xifzbJFgVA0mCd0HOecC7dHINs3ZKxr7Z1zvnIupdK5ohQW4ou5S_gDEwFgXACwLDkGPt0ERMB0H_P-Xk0gYSInT1pBIOe9j4lOMabQRYNznndAcbChQp9aDwtId0CRSLumIDQGAIJgz8rR0YPiLYIC_hjwnlPboEwKYWHoJS_ZVyjnMNYSyw5XCvicvzt0AA1NsOBWxNGcgeWg7o6CkUvLeR80gXyfljOkW7ZlsBCVMJYWMNVPRyjcI2YSgVQrjAiuZfClAhjTWhJpZEqA0TYlCASQQJJKS0TTIuBcEwJtuiBLYkDDAMAIRTBmDCJYgz4pSDVDjBBgxhzdHNsIAg8a9AADlSBsG6AAH26BG5KuBaG8m4nOboAApUcAANAgztYDmEYJm7NBDc0c3dVzL1QQODdCRgACSEGwfgIbljPCYioWGX0Jhr37SMAkBbCpbDrBcH1_A_UBojv2wZzSVCtMDeOhYSxERokBsDUG31BHghzVGnMGMsY4xgCe14cpezgi7T2ti_a9VylILnJttdZkrwmOCH2o6hj9u-M8Dl67hjdEvdjfAIwD2C2-ty4mgyw4oh5AIyYLARg21oPw7AGsMNImeE7O2mhRRntwJ8d4tD64olIG7bD8zNlYZgLQJi9GWOMcJYR7oxH7YwBeMXdmOYUNwjo2AbDMdWXMdY-x2gknDncd45oATQnqNzI7RMbtaBe0ozBBpoYWne39sRMicDBAX4oBeLwmYerSbokes9TEdmsTxXXQQTseUYkxoYm5-iN1XWqeEzR_AtA7gC1BgAQT0HPAA0riZE7weXOf-DR4QsX4vPHA3CYuCJBHudxJybDuGj4YZeGl_pcX7BCaxA5l6dLosVYKzmTmanrhXpYLAJkiDsAJYJicR9mnn19p3RB6BcbkgEAALLypts7fpjBRSdt6JN-ZNx5RVvuB4T4tnCssbY-JjjmyrOEBOI4ljdLlhLZW2tuUG2a20DeAQMTDHNnVfRNh_bEnWXHfqDC87aBLvLdW-t6tHhHvPZY_J_Ob2_hFYPnhlgpW-toHy1VzkEAwCvCg9ej42P8B0xOG9lrOYnau3dnoKzO36wY9eHBo9gwPhw_QywfG_ND1gwZ-jzHLwACEdOOcDA-CFsL7OovhMa_YKjzWRhwn599BEb3auvU5B9GsEco5GEYE3RObFSo-gjtrpOeu2xPu02xXT5mE5WfXVTpSfwlfFXamrsdMwly5j4fDo-CM3OdieI8Z4aGEcYc5nbqUnZvczFRyH0P9n-Z4yfmwW3MesQ05eIHkrmt_eZcj52D4yXk8kvUxDuTrKEsJ4DQD7oV3ge3dB4wN4eXi9Q-5G7-CKHi-cZ6KB8vF2q9A5u3dsHjfZOd9b0BVPTfWV57H_BD7snm8vEn4cmHBesRz4O7QTvi-R-vZn7maPq-D8x8Zk708GNutYDxjAJPq_2udYv9Z-4Ixr975WEfpSxv4LAF8959_hlQirwzCf54RLi6p_6xgAGNzxw678Cf6iiLJFD6q0AIwd6bKrAHL5woHz6sqrCsynjf5wyW6WaP4qA36ngO5vSh5xikS4gR73BR71orIIxjCVL9zgg-4Zb-7_Ce74ZCLbADDUzYByL4g5IwByKVDAFSgEH0EFQCjgHhQXRAQr5YhgGSimjq6kpybQFG4q54FCbE6eqdA9D86BqiyyB7wABCyU8S9gSAQMUANsLYIAyUbAxgss8s1AmhKsXqSaPQ6wAcWwQcFK86qsPQYwGA8g9ApsZ8Oq_smwgRyQSgqgewiCHgwR5AxsRhtw9wpAcR2wuwNQpA6RockRMA0RpAtA-MpAGA2yHgBAIWg-jAFh9gpWgRMR6ij2AovaLwoowsuROEbwFcYszh3yJgBAf8KgUATQXhogooPONwTETIvQAAmrMM7N0BMVAHWKKJsV5jjI8GcCAAwIcXBDsT2oJKKOYCcNwfEthgcSAIymAAoCUicSrlcWgMcmgOYPcXKLwBRCbIcSlprsgYcRgdyI8GwL8f6goGCSMMlBPL2PfISLAI8IXFhtyJGlgPgqQAoJAMgU_K8e9O8Z8d8YcfnJti4PQoCUrIwPcSIqXAycXISRAQfNpqcafCwPYBceaN6iwPcQsBUYCerPcfkoUrgBgrAsYICXgaaByVyRcKaJsZ8BUJUEAA"
              style={{ marginRight: 16, color: '#000000e0' }}
            >
              codeSandBox
            </a>
          </Tooltip>
          <Tooltip placement="top" title={!isShowCode ? '显示代码' : '收起代码'}>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => setIsShowCode(!isShowCode)}
              alt="expand code"
              src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg"
              className="code-expand-icon-show"
            />
          </Tooltip>
        </div>
        {isShowCode && (
          <div>
            <Divider dashed />
            <div className="code">
              <HighlightCode code={code} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Template
