// Observable
import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

const App = () => {
    const [observables, setObservables] = useState([]);

    useEffect(() => {
        const o = new Observable((observer) => {
            setInterval(() => {
                console.log('Interval');
                observer.next(Date.now());
            }, 1000);
        });

        const subscription = o.subscribe({
            next: (data) => {
                setObservables((prev) => [data, ...prev]);
            },
        });

        setTimeout(() => {
            subscription.unsubscribe();
        }, 5000);

        return () => subscription.unsubscribe();
    }, []);

    return (
        <section>
            <h2>Observable</h2>
            <ul>
                { observables.map((item, index) => (
                    <li key = { index }>{ item }</li>
                )) }
            </ul>
        </section>
    );
};

export default App;
