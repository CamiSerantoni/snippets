
import { notFound } from 'next/navigation'
import { db } from '@/db'

interface SnippetsShowPageProps {
    params: {
        id:string
    }
}

export default async  function SnippetsShowPage(props: SnippetsShowPageProps) {

const snippet = await db.snippet.findFirst({
    where: {id: parseInt(props.params.id)}
})

if(!snippet) {
    return notFound()
}

    return (
        <div>
        {snippet.title}
        </div>
    );
}