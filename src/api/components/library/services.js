import Library from './db/model'
import { downvoteUpvote } from './utils'
import { saveDoc } from '../../db/methods'

class LibraryService {
    static getAll() {
        return Library.getAll()
    }

    static create(data) {
        return Library.createLibrary(data)
    }

    static update(id, data) {
        return Library.editLibrary(id, data)
    }

    static addItem(id, data) {
        return Library.addItem(id, data)
    }

    static editItem(params, data) {
        return Library.editItem(params, data)
    }

    static async toggleVote(params, userId, isUpvote) {
        const { lib, item } = await Library.getItemById(params)

        downvoteUpvote(item, userId, isUpvote)

        await saveDoc(lib)

        const {
            upvotes,
            downvotes
        } = item
        
        return {
            upvotes,
            downvotes
        }
    }

    static removeItem(params) {
        return Library.removeItem(params)
    }

    static delete(id) {
        return Library.delete(id)
    }
}

export default LibraryService