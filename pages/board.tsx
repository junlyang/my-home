import { DatePicker } from 'antd';

export default function Board () {
    return (
        <>
            <DatePicker/>
            <table>
                <thead>
                    <td></td>
                    <td>제목</td>
                    <td>날짜</td>
                </thead>
                <tr key="1">
                    <td></td>
                    <td>오늘 나는 어제의 나를 ...</td>
                    <td>2</td>
                </tr>
            </table>
        </>
    )
}