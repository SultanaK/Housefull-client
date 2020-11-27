import config from './config'
function getItems() {
    fetch(`${config.API_ENDPOINT}/items`)
        .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.error)
        }
        return resp.json()
        })
        .then(resp => {
        this.setState({items: resp})
        })
        .catch(err => {
        alert(err)
        })
}

function getCategorys() {
    fetch(`${config.API_ENDPOINT}/categorys`)
        .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.error)
        }
        return resp.json()
        })
        .then(resp => {
        this.setState({categorys: resp})
        })
        .catch(err => {
        alert(err)
        })
}

export { getItems, getCategorys };