import faker from 'faker'

export class Factory {

    static postVotes(votes_type) {
        switch (votes_type) {
            case 'valid':
                return {
                    "image_id": "asf2",
                    "sub_id": "my-user-1234",
                    "value": 1
                }
            case 'invalid':
                return {
                    "image_id": "",
                    "sub_id": "",
                    "value": 1
                }
            default:
                return { notfound: "The user type was not found, please verify!" }
        }
    }

    static pegarImagemId() {
        return "asf2"
    }
}