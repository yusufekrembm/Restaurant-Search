import axios from 'axios';


export default axios.create({
    baseURL:  'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer SActMQnWzYjRawNeYj7k-t5saOK9EuRdPb1UkHpeoVfgyks7Z4jUQCjX5m9KEK4wBtYW5hJrWH6cHLVFL0UrbgplDvZzguFdJMIJfHlcuAD6GYJtkS-x5ybAqvlXY3Yx'
    }
});
