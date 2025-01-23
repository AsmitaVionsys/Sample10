export default {
    SUCCESS: 'The operation has been completed successfully.',
    SOMETHING_WENT_WRONG: 'Something went wrong.',
    NOT_FOUND: (entity: string) => {
        return `The requested ${entity} was not found.`;
    },
    TOO_MANY_REQUESTS: 'Too many requests from your IP address'
};
