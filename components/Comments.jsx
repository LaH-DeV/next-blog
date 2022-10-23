import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
			const result = getComments(slug);
			setComments(result);
		}
		fetchData();
    }, [])
    
  
    return (
        <>
            {comments.length > 0 && (
                <div>
                    <div>Comments ({comments.length})</div>
                    <div>
                        {comments.map((comment) => (
                            <div key={comment.createdAt}>
                                <span>{comment.name}</span><span> on {moment(comment.createdAt).format("MMM DD, YYYY")}</span>
                                <br />
                                <p>{parse(comment.comment)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
  )
}

export default Comments