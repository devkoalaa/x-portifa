import { StyleFunctionProps, color, extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            background: '../public/background-beta.png',
        },
    }),
}

const components = {
    Button: {
        variants: {
            anime: {
                background: '#0EDBFD',
                borderColor: "#000",
                color: '#000',
                borderRadius: '100px',
                _hover: {
                    background: "#FFDD0F",
                    boxShadow: '1.64px 3px'
                }
            },
        },
    },
}

const customTheme = extendTheme({ config, styles, components })

export default customTheme