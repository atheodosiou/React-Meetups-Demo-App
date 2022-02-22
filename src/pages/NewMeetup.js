import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom'
function NewMeetupPage() {
    const navigate = useNavigate();
    function addNewMeetupHandler(data) {
        fetch(
            'https://react-demo-meetups-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                navigate('/', { replace: true });
            });
    };

    return (
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;