# react-geo-ip

> Get public IP address and Country Code in React

Using the [`wipmania` API](http://api.wipmania.com/)


## Install

```
$ npm install --save react-geo-ip
```


## Usage

```js
import GeoIP from 'react-geo-ip';

GeoIP().then(geoip => {
	console.log(geoip);
	//=> '47.122.71.234<br>CN'
});
```


## API

### GeoIP()

Returns a `Promise` for the IP address and Country Code.

## License

MIT © Loongwoo
