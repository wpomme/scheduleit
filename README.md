## Json server
install command: `npm install -g json-server`  
```
json-server --port 30000 --watch mock/schedules.json
```

`pages`の`getStaticProps`でデータを取得する
```
const res = await fetch("http://localhost:30000/schedules")
const schedules: TopProps = await res.json()
```
