export default function RedUnderline({ width }: { width?: string }) {
    return (
        <div className={`w-0 group-hover:w-` + width + ` h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
    )
}