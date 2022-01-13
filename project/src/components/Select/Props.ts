import React from "react";

type Props = {

    readonly placeholder: string,
    readonly onChange: React.Dispatch<React.SetStateAction<string>>,
    readonly value: string,
    readonly options: {[key: string]: string},
    readonly name: string
}

export default Props;