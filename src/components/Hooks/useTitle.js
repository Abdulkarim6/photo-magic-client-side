const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- Photo Magic`
    }, [title])
}

export default useTitle;