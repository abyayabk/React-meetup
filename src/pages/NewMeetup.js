import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';
function NewMeetup() {

    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-demo-c8f24-default-rtdb.firebaseio.com/meetups.json',
        {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'content-type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });

    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>

    );
}

export default NewMeetup;