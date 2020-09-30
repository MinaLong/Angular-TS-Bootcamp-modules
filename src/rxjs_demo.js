// URL to test this code (visualize observable changes)
// https://out.stegrider.now.sh/

// 1. Example 1:
// similar to import rxjs in editor
const { fromEvent } = Rx;
const { map, pluck } = RxOperators;

// get an input box
const input = document.createElement('input');
const container = document.querySelector('.container');
container.appendChild(input);

// from event: a function that we call
// that returns an observable
const observable = fromEvent(input, 'input')
    .pipe(
        // map(event => event.target.value),
        pluck('target', 'value'),
        map(value => parseInt(value)),
        map(value => {
            if (isNaN(value)) {
                throw new Error('Enter a number');
            }
            return value;
        })
    )
    ;
observable.subscribe({
    next(value) {
        console.log(`Your value is ${value}`);
    },
    error(err) {
        console.error(`Error happened!`, err.message);
    },
});

// specific to this tool, visualize last element
observable;

// 2. Example 2:
// we're using the observable class to create 
// an observable for our example
const { Observable } = Rx;
const observable = new Observable((subscriber) => {
    // throw value 1 into our pipeline
    // emit a new value that flows through our pipeline
    subscriber.next(1);

    // operators have errors, will directly come here
    // emit an error, no more values will come out
    subscriber.error(new Error('sss went wrong'));

    // we want our observable to stop emitting new event
    subscriber.complete(1);
    // no value will come out because we've completed
    // subscriber.next(1);
});

observable.subscribe({
    next(value) {
        console.log(`Got a value ${value}`);
    },
    complete() {
        console.log('Observable is complete.');
    },
    error(err) {
        console.error(`Error happened!`, err.message);
    },
});

// specific to this tool, visualize last element
observable;

// 3. Example 3:
// alternative observable syntax, instead of next(value)
// we can simply use (value) => {},
// we're using the observable class to create 
// an observable for our example
const { Observable } = Rx;
const observable = new Observable((subscriber) => {
    // throw value 1 into our pipeline
    // emit a new value that flows through our pipeline
    subscriber.next(1);

    // operators have errors, will directly come here
    // emit an error, no more values will come out
    subscriber.error(new Error('sss went wrong'));

    // we want our observable to stop emitting new event
    subscriber.complete(1);
    // no value will come out because we've completed
    // subscriber.next(1);
});

observable.subscribe(
    (value) => console.log('Next value;', value),

    // usually we dont't need to provide anything
    // for handling the error and complete
    (err) => console.log('Bad error!', err.message),
    () => console.log('Complete'),
);

// specific to this tool, visualize last element
observable;

// 4. example 4
// unicast observables
// emits a separate set of values for each observer that subscribes
// so all the console log will be printed twice
// because we have two observable.subscribe

// we're using the observable class to create 
// an observable for our example
const { Observable } = Rx;
const { tap } = RxOperators;

const observable = new Observable((subscriber) => {
    // throw value 1 into our pipeline
    // emit a new value that flows through our pipeline
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    // operators have errors, will directly come here
    // emit an error, no more values will come out
    subscriber.error(new Error('sss went wrong'));

    // we want our observable to stop emitting new event
    subscriber.complete(1);
    // no value will come out because we've completed
    // subscriber.next(1);
}).pipe(
    tap(value => console.log('Value from tab:', value))
);

observable.subscribe(
    (value) => console.log('Next value;', value),

    // usually we dont't need to provide anything
    // for handling the error and complete
    (err) => console.log('Bad error!', err.message),
    () => console.log('Complete'),
);

observable.subscribe((value) => {
    console.log('From second subscribe', value);
});

// specific to this tool, visualize last element
new Observable(() => { });

// 5. example 5
// multicast observables
// all observables that subscribe will get the same emitted values
// the share operator will turn unicast -> multicast observable
// the second subscriber might not get the earlier event (like in screenshot)

// we're using the observable class to create 
// an observable for our example
const { Observable } = Rx;
const { tap, share } = RxOperators;

const observable = new Observable((subscriber) => {
    // throw value 1 into our pipeline
    // emit a new value that flows through our pipeline
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout(() => {
        subscriber.next(4);
    }, 500);

    // operators have errors, will directly come here
    // emit an error, no more values will come out
    // subscriber.error(new Error('sss went wrong'));

    // we want our observable to stop emitting new event
    subscriber.complete(1);
    // no value will come out because we've completed
    // subscriber.next(1);
}).pipe(
    tap(value => console.log('Value from tab:', value)),
    share()
);

observable.subscribe(
    (value) => console.log('Next value;', value),

    // usually we dont't need to provide anything
    // for handling the error and complete
    (err) => console.log('Bad error!', err.message),
    () => console.log('Complete'),
);

observable.subscribe((value) => {
    console.log('From second subscribe', value);
});

// specific to this tool, visualize last element
new Observable(() => { });