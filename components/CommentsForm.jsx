import React, { useRef, useState, useEffect } from "react";

import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState(false);
	const [localStorage, setLocalStorage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const commentElement = useRef();
	const nameElement = useRef();
	const emailElement = useRef();
	const storeDataElement = useRef();

    useEffect(() => {
        nameElement.current.value = window.localStorage.getItem("name");
        emailElement.current.value = window.localStorage.getItem("email");
    }, []);

	const handleFormSubmission = async (e) => {
		e.preventDefault();
		setError(false);
		const { value: comment } = commentElement.current;
		const { value: name } = nameElement.current;
		const { value: email } = emailElement.current;
		const { checked: storeData } = storeDataElement.current;
		if (!emailElement || !name || !email) {
			// todo better validation
			setError(true);
			return;
		}

		const commentObj = { name, email, comment, slug };

        if(storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('email');
        }
        const response = await submitComment(commentObj);
        if(response.ok) {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
        } else {
            setError(true);
			return;
        }
	};

	return (
		<div>
			<form>
				<h2>Leave a Reply</h2>
				<div className="input-group row mb-3 gap-3 align-items-center">
					<label htmlFor="name" className="form-label col-1">Name</label>
					<input id="name" ref={nameElement} className="form-control" type="text" placeholder="Jon Snow" />
				</div>
				<div className="input-group row mb-3 gap-3 align-items-center">
					<label htmlFor="email" className="form-label col-1">Email</label>
					<input id="email" ref={emailElement} className="form-control" type="email" placeholder="TheKingInTheNorth@winterfell.north" />
				</div>
				<div className="input-group row mb-3 gap-3">
					<label htmlFor="comment" className="form-label col-1">Comment</label>
					<textarea id="comment" ref={commentElement} className="form-control" rows="6" placeholder="You know nothing Jon Snow!" />
				</div>
				<div className="form-check mb-3 ml-3">
					<input className="form-check-input" ref={storeDataElement} defaultChecked type="checkbox" id="storeData"/>
					<label className="form-check-label" htmlFor="storeData">Save my e-mail and name for the next time I comment.</label>
				</div>
				{error && (
					<div className="alert alert-error">
						<p>All fields are required.</p>
					</div>
				)}
				<button type="submit" className="btn btn-primary" onClick={handleFormSubmission}>
					Post Comment
				</button>
				{showSuccessMessage && (
					<div className="alert alert-success">
						<span>Comment submitted for review!</span>
					</div>
				)}
			</form>
		</div>
	);
};

export default CommentsForm;
