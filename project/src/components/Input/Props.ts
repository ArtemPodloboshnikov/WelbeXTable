import React from "react";

type Props = {

    readonly placeholder: string,
    readonly name: string,
    readonly value: string,
    readonly onChange: React.Dispatch<React.SetStateAction<string>>
}

export default Props;