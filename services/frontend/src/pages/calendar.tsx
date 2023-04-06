// @ts-nocheck
import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import fs from 'fs'
import { NextPage } from "next"
import { useState } from "react"
import Date from "../components/Date"

type DateProps = { list: Array<string> }

const Test: NextPage = ({ list }: DateProps) => {
    const [date, setDate] = useState('')

    return (
        <Container>
            <FormControl fullWidth>
                <InputLabel id="date-select-label">Select date</InputLabel>
                <Select
                    onChange={(e) => setDate(e.target.value)}>
                    {list.map((item: string) => (
                        <MenuItem
                            selected={date === item ? true : false}
                            key={item}
                            value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Date
                date={date} />
        </Container>
    )
}

export async function getServerSideProps(context: any) {
    // @ts-ignore
    const files = fs.readdirSync(process.env.DATA_DIRECTORY as string)
    const list = files.map(item => {
        return item.replace('.json', '')
    }).reverse()

    return {
        props: { list }
    }
}

export default Test
