export default function SnippetsCreatePage() {
  return (
    <form action="">
      <h3 className="font-bold m-3">Create snippet</h3>
      <div className="flex  flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            {" "}
            Title
          </label>
          <input
            type="text"
            name="title"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex  flex-col gap-4">
          <div className="flex gap-4">
            <label htmlFor="code" className="w-12">
              {" "}
              Code
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>
          <button type="submit" className="rounded p-2 bg-blue-200">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
