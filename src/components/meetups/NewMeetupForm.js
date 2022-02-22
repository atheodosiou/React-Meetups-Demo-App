import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHundler(event) {
        event.preventDefault();
        const meetupData = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value
        };
        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHundler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type="text" id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image Url</label>
                <input type="text" id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" id="address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea type="text" id="description" required rows="5" ref={descriptionInputRef} />
            </div>
            <div className={classes.actions}>
                <button type='submit'>Add meetup</button>
            </div>
        </form>
    </Card>;
}

export default NewMeetupForm;