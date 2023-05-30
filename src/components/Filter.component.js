export default function Filter({ item, handleCheck }) {
    return (
    <div className="px-4 relative flex items-start">
        <div className="flex h-6 items-center">
            <input
                id={item.value}
                aria-describedby="comments-description"
                name={item.value}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                onChange={() => handleCheck(item)}
            />
        </div>

        <div className="ml-3 text-sm leading-6">
            <label htmlFor={item.value} className="font-medium text-gray-900 cursor-pointer">
                {item.name}
            </label>
        </div>
    </div>
    )
}