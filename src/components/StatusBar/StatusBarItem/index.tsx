import { StatusBarItem } from '../../../store/statusBar/index'
import Icon, { IconType } from '@icon-park/react/es/all'
type Props = {
  data: StatusBarItem
}

export default function (props: Props) {
  const { data } = props
  return (
    <li className="status-bar-item" onClick={data.click} title={data.title} key={data.id}>
      {data.icon ? (
        <br /> // <Icon type={ data.icon.id } theme="filled" />
      ) : (
        <span>{data.title}</span>
      )}
    </li>
  )
}
