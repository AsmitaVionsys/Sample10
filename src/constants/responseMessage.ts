export default {
  SUCCESS: 'The operation has been completed successfully.',
  SOMETHING_WENT_WRONG: 'Something went wrong.',
  NOT_FOUND: (entity: string) => {
    return `The requested ${entity} was not found.`;
  },
};
