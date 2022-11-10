const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- dragon-news`
    }, [title])
}

export default useTitle;