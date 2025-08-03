    import React, { Component } from 'react';

    class GetUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        person: null,
        loading: true
        };
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
        console.log(data.results[0]);
    }

    render() {
        const { loading, person } = this.state;

        if (loading) {
        return <div>Loading...</div>;
        }

        return (
        <div>
            <h2>{person.name.first} {person.name.last}</h2>
        
        
            <img src={person.picture.large} alt="User" />
        </div>
        );
    }
    }

    export default GetUser;
