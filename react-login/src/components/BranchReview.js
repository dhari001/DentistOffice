import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import axios from 'axios'
import {Header, Rating, Segment, Comment, List, Icon} from "semantic-ui-react";

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

    const averageProfessionalism = () => {
        let profAvg = 0.0;
        for (let r in reviews) {
            profAvg += reviews[r].professionalism;
        }
        profAvg /= reviews.length;
        profAvg = Math.floor(profAvg);
        return profAvg;
    }

    const averageCleanliness = () => {
        let cleanAvg = 0.0;
        for (let r in reviews) {
            cleanAvg += reviews[r].cleanliness;
        }
        cleanAvg /= reviews.length;
        cleanAvg = Math.floor(cleanAvg);
        return cleanAvg;
    }

    const averageCommunication = () => {
        let comAvg = 0.0;
        for (let r in reviews) {
            comAvg += reviews[r].communication;
        }
        comAvg /= reviews.length;
        comAvg = Math.floor(comAvg);
        console.log(comAvg)
        return comAvg;
    }

    const averageValue = () => {
        let valAvg = 0.0;
        for (let r in reviews) {
            valAvg += reviews[r].value;
        }
        valAvg /= reviews.length;
        valAvg = Math.floor(valAvg);
        console.log(valAvg)
        return valAvg;
    }


    return (
        <Segment>
            <Header>Rating</Header>
            <List divided verticalAlign='middle'>
                <List.Item>
                    <List.Content floated='right'><Rating maxRating={5}/></List.Content>
                    <List.Icon name='handshake outline'/>
                    <List.Content>Professionalism</List.Content>
                </List.Item>
                <List.Item>
                    <List.Content floated='right'><Rating maxRating={5}/></List.Content>
                    <List.Icon name='talk'/>
                    <List.Content>Communication</List.Content>
                </List.Item>
                <List.Item>
                    <List.Content floated='right'><Rating maxRating={5}/></List.Content>
                    <List.Icon name='paper plane outline'/>
                    <List.Content>Cleanliness</List.Content>
                </List.Item>
                <List.Item>
                    <List.Content floated='right'><Rating maxRating={5}/></List.Content>
                    <List.Icon name='dollar sign'/>
                    <List.Content>Value</List.Content>
                </List.Item>
            </List>

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