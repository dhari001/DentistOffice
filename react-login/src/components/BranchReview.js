import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import axios from 'axios'
import {Header, Rating, Segment, Comment} from "semantic-ui-react";

const BranchReview = () => {
    const {id} = useParams();

    const [reviews, SetReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const {data} = await axios.get(`http://localhost:8080/review/findByBranchId?id=${id}`);
            SetReviews(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchReviews();
        reviews.map((review) => {
            review.date = new Date(review.date);
            console.log(review.date.getDate());
        })
    }, []);

    const datify = (dateString) => {
        const dateFormat = new Date(dateString);
        const prettyString = dateFormat.getDate()+'-'+dateFormat.getMonth()+'-'+dateFormat.getFullYear();
        return (prettyString)
    }

    return (
        <Segment>
            <Header>Rating</Header>
            <Header size="small">Professionalism</Header> <Rating maxRating={5}/>
            Communication
            Cleanliness
            {id}

            <Comment.Group>
                <Header size="small" dividing>Reviews</Header>

                {reviews.map((review) => (
                    <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>{review.patient.profile.firstName} {review.patient.profile.lastName}</Comment.Author>
                            <Comment.Metadata>
                                {datify(review.date)}
                            </Comment.Metadata>
                            <Comment.Text>{review.comments}</Comment.Text>
                        </Comment.Content>
                    </Comment>

                ))}

            </Comment.Group>
        </Segment>
    )
}

export default BranchReview;