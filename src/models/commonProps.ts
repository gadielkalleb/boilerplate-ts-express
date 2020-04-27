export const questionOrAnswerwsBaseProps = {
  username: {
    type: String,
    minlength: 10,
    maxlength: 50
  },
  text: {
    type: String
  },
  like: Number,
  unlike: Number,
}
