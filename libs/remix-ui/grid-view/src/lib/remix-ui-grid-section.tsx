import React, {useState, useEffect, useContext, useRef, ReactNode} from 'react' // eslint-disable-line
import { CustomTooltip } from "@remix-ui/helper";

import './remix-ui-grid-section.css'

declare global {
  interface Window {
    _paq: any
  }
}
const _paq = window._paq = window._paq || []

interface RemixUIGridSectionProps {
  plugin: any
  title?: string
  onClickTitle?: () => void
  tooltipTitle?: string
  hScrollable: boolean
  classList?: string
  styleList?: any
  children?: ReactNode
}

export const RemixUIGridSection = (props: RemixUIGridSectionProps) => {
  return (
    <div
      className={`d-flex px-4 py-2 flex-column w-100 remixui_grid_section_container ${props.classList}`}
      data-id={"remixUIGS" + props.title}
      style={{ overflowX: 'auto' }}
    >
      <div className="d-flex flex-column w-100 remixui_grid_section">
        <CustomTooltip tooltipText={props.tooltipTitle}>
          { props.title && <h6 onClick={() => props.onClickTitle()} className='mt-1 mb-0 align-items-left '>{ props.title }</h6> }
        </CustomTooltip>
        <div className={(props.hScrollable) ? `d-flex flex-row pb-2  overflow-auto` : `d-flex flex-wrap`}>
          { props.children }
        </div>
      </div>
    </div>
  )
}

export default RemixUIGridSection
