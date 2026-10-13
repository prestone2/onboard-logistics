import { operationalIllustration, telemetryIntro } from '../../../data/fleet'

export function OperationalIllustration() {
  return (
    <div className="operational-illustration">
      <table role="table" aria-describedby="illustration-disclaimer">
        <caption>{telemetryIntro.panelTitle}</caption>
        <thead role="rowgroup"><tr role="row">{telemetryIntro.columns.map(column => <th key={column} scope="col" role="columnheader">{column}</th>)}</tr></thead>
        <tbody role="rowgroup">{operationalIllustration.map(row => <tr key={row.id} role="row">
          <td role="cell"><span className="mobile-cell-label" aria-hidden="true">{telemetryIntro.columns[0]}</span><span>{row.vehicle}</span></td>
          <td role="cell"><span className="mobile-cell-label" aria-hidden="true">{telemetryIntro.columns[1]}</span><span>{row.route}</span></td>
          <td role="cell"><span className="mobile-cell-label" aria-hidden="true">{telemetryIntro.columns[2]}</span><span><span className="illustration-status-mark" aria-hidden="true" />{row.status}</span></td>
        </tr>)}</tbody>
      </table>
      <p id="illustration-disclaimer">{telemetryIntro.disclaimer}</p>
    </div>
  )
}
