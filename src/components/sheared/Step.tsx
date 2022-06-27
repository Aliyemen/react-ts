type StepProps = {
    label: string;
    index:number;
    className: string;

}
export function Step(props: StepProps) {
    return (
        <>
            <div className={props.className}>
                <p><span>{props.index} </span> {props.label}</p>

            </div>
        </>
    )
}
