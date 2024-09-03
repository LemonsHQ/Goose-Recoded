module.exports = {
    arrays : function() {
        const greetings = [
            'hi', 
            'hello', 
            'hey', 
            'good morning', 
            'good night', 
            'good evening', 
            'good afternoon', 
            'whats up', 
            'whassup', 
            'wassup'
        ]
        const convos1 = [
            'how are you',
            'are you',
            'do you',
        ]
        const convos2 = [
            'will you',
            'can you'
        ]
        const expressions = [
            'Im great, how about you?',
            'Im doing great today!',
            'Im feeling amazing, arent you?',
            'Never been better!'
        ]
        const resexp = [
            'thats',
            'me too',
            'im'
        ]
        const lh = [
            like = ['do you like', 'dont you love'],
            dislike = ['do you hate', 'dont you hate', 'do you dislike']
        ]
        const likedis = [
            like = ['i like', ' i love'],
            dislike = ['i hate', 'i dont like', 'i dislike']
        ]
        const yesno = [
            yes = ['yes'],
            no = ['no']
        ]
        const topics = [
            sports = ['basket ball', 'baseball', football = ['soccer', 'foot ball'], 'hockey', 'golf', 'tennis'], 
            hobbies = [], 
            games = [], 
            colors = [], 
            food = [], 
            books = [],
            school = [],
            work = [],
        ]
        return { "greetings": greetings, "convos1": convos1, "convos2": convos2, "expressions": expressions, "resexp": resexp, "lh": lh, "likedis": likedis,"yesno": yesno, "topics": topics};

    }
}