import chalk from "chalk"
import { codeToTokensBase } from "shiki"

type CodeToTokensBaseParams = Parameters<typeof codeToTokensBase>

export const highlightCode = async (
    code: CodeToTokensBaseParams[0],
    options: {
        lang: CodeToTokensBaseParams[1]["lang"]
        theme: CodeToTokensBaseParams[1]["theme"]
    },
) => {
    const linesOfTokens = await codeToTokensBase(code, {
        lang: options.lang,
        theme: options.theme,
    })

    const coloredString = linesOfTokens
        .map((line) =>
            line
                .map((token) => {
                    if (!token.color) {
                        return token.content
                    }
                    return chalk.hex(token.color).visible(token.content)
                })
                .join(""),
        )
        .join("\n")

    return coloredString
}
