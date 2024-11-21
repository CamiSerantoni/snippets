
interface SnippetEditPageProps {
params: {
id: string
}
}

export default function SnippetsEditPage(props: SnippetEditPageProps) {
    const  id  =parseInt(props.params.id);
 
   
    return (
        <div>Editing the {id}</div>
    )
}