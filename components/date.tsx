import {parseISO, format} from 'date-fns'
import { parse } from 'remark'

export default function Date({dateString}: {dateString: string}) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}