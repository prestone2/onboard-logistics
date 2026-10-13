export type MetricIcon = 'route' | 'truck' | 'monitor' | 'globe' | 'customs'

export interface CompanyMetric {
  value: string
  label: string
  icon: MetricIcon
}
