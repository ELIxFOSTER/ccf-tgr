// mailchimp.js

// Action types
const SUBSCRIBE_SUCCESS = "mailchimp/SUBSCRIBE_SUCCESS";
const SUBSCRIBE_FAILURE = "mailchimp/SUBSCRIBE_FAILURE";

// Action creators
const subscribeSuccessAction = () => ({
  type: SUBSCRIBE_SUCCESS,
});

const subscribeFailureAction = () => ({
  type: SUBSCRIBE_FAILURE,
});

// Thunk for subscribing to Mailchimp
export const subscribeToMailchimp = ({ email }) => async (dispatch) => {
  try {
    const response = await fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json(); // Parse the response body as JSON

    if (response.ok && data.success) {
      dispatch(subscribeSuccessAction());
    } else {
      dispatch(subscribeFailureAction());
    }
  } catch (error) {
    console.error("Error subscribing to Mailchimp:", error);
    dispatch(subscribeFailureAction());
  }
};

// Reducer
const initialState = {
  subscribed: false,
};

const mailchimpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_SUCCESS:
      return { ...state, subscribed: true };
    case SUBSCRIBE_FAILURE:
      return { ...state, subscribed: false };
    default:
      return state;
  }
};

export default mailchimpReducer;
