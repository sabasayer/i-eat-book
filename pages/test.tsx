import { NextPage } from 'next'
import Link from 'next/link'
import { ChangeEvent, useMemo, useState } from 'react'
import styles from '../styles/Home.module.css'

interface TestData {
  data: { id: string; name: string }[]
}

export const getServerSideProps = async () => {
  const jsonRes = await fetch(
    'https://6276994715458100a6b0dcf7.mockapi.io/products',
    { method: 'GET' }
  )
  const res = await jsonRes.json()

  return {
    props: {
      data: res,
    },
  }
}

const Test: NextPage<TestData> = (props) => {
  const [name, setName] = useState('')

  const changeName = (ev: ChangeEvent) =>
    setName((ev.target as HTMLInputElement).value ?? '')

  const isMe = useMemo(() => name === 'salih', [name])

  const list = props.data.map((data) => <div key={data.id}>{data.name}</div>)

  return (
    <div className={styles.container}>
      <div>{list}</div>
      <Link href="/">Go Back to home</Link>
      <input value={name} onChange={changeName} />
      <div>{name}</div>
      <div>isMe : {isMe + ''}</div>
    </div>
  )
}

export default Test
