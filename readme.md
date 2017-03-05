curl -X GET localhost:3000/api/timers
-X specifies which HTTP method to use

-H '' headers
-d '{}' JSON data

//CREATE NEW TIMER
curl -X POST -H 'Content-Type: application/json' -d '{"title":"Jumping Jacks","project":"exercise","id":"c99c1d19-f32d-4aff-b470-cea4e792406a"}' localhost:3000/api/timers

//EDIT TIMER
curl -X PUT -H 'Content-Type: application/json' -d '{"title":"Jumping Jacks","project":"exercise in the morning","id":"c99c1d19-f32d-4aff-b470-cea4e792406a"}' localhost:3000/api/timers
-----------------------------------------------------------------------------------------------
//Start Mow Lawn TIMER
curl -X POST -H 'Content-Type: application/json' -d '{"start":1456468632194,"id":"0a4a79cb-b06d-4cb1-883d-549a1e3b66d7"}' localhost:3000/api/timers/start

//Stop Mow Lawn TIMER
curl -X POST -H 'Content-Type: application/json' -d '{"stop":1956468632194,"id":"0a4a79cb-b06d-4cb1-883d-549a1e3b66d7"}' localhost:3000/api/timers/stop

//Start Paper Jam TIMER
curl -X POST -H 'Content-Type: application/json' -d '{"start":1456468632194,"id":"a73c1d19-f32d-4aff-b470-cea4e792406a"}' localhost:3000/api/timers/start

CREAT NEW to DELETE
-------------------------------------------------------------------------------
curl -X POST -H 'Content-Type: application/json' -d '{"title":"Yoga","project":"exercise","id":"appc1d19-f32d-4aff-b470-cea4e792406a"}' localhost:3000/api/timers

curl -X DELETE -H 'Content-Type: application/json' -d '{"id":"appc1d19-f32d-4aff-b470-cea4e792406a"}' localhost:3000/api/timers
