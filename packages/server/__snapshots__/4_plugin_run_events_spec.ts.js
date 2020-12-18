exports['e2e plugin run events / sends events'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:      1.2.3                                                                            │
  │ Browser:      FooBrowser 88                                                                    │
  │ Specs:        2 found (run_events_spec_1.js, run_events_spec_2.js)                             │
  │ Searched:     cypress/integration/*                                                            │
  │ Experiments:  experimentalRunEvents=true                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘

before:run: cypress/integration/run_events_spec_1.js electron
before:run is awaited

────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  run_events_spec_1.js                                                            (1 of 2)
before:spec: cypress/integration/run_events_spec_1.js
before:spec is awaited


  ✓ is true

  1 passing

spec:end: cypress/integration/run_events_spec_1.js { tests: 1, passes: 1, failures: 0 }
after:spec is awaited

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     run_events_spec_1.js                                                             │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  run_events_spec_2.js                                                            (2 of 2)
before:spec: cypress/integration/run_events_spec_2.js
before:spec is awaited


  ✓ is true

  1 passing

spec:end: cypress/integration/run_events_spec_2.js { tests: 1, passes: 1, failures: 0 }
after:spec is awaited

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     run_events_spec_2.js                                                             │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  run_events_spec_1.js                     XX:XX        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  run_events_spec_2.js                     XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        2        2        -        -        -  


`

exports['e2e plugin run events / handles video being deleted in after:spec'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:      1.2.3                                                                            │
  │ Browser:      FooBrowser 88                                                                    │
  │ Specs:        1 found (after_spec_deletes_video.js)                                            │
  │ Searched:     cypress/integration/*                                                            │
  │ Experiments:  experimentalRunEvents=true                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  after_spec_deletes_video.js                                                     (1 of 1)


  ✓ is true

  1 passing

Warning: We could not find the video at the following path, so we were unable to process it.

Video path: /foo/bar/.projects/plugin-after-spec-deletes-video/cypress/videos/after_spec_deletes_video.js.mp4

This error will not alter the exit code.

  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     after_spec_deletes_video.js                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  after_spec_deletes_video.js              XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        1        1        -        -        -  


`

exports['e2e plugin run events / fails if experimentalRunEvents is not enabled'] = `
The following validation error was thrown by your plugins file (\`/foo/bar/.projects/plugin-run-events/cypress/plugins/index.js\`).

 Error: The \`before:run\` event requires the experimentalRunEvents flag to be enabled.

To enable it, set \`"experimentalRunEvents": true\` in your cypress.json
      [stack trace lines]
`

exports['e2e plugin run events / fails run if event handler throws'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:      1.2.3                                                                            │
  │ Browser:      FooBrowser 88                                                                    │
  │ Specs:        1 found (run_event_throws_spec.js)                                               │
  │ Searched:     cypress/integration/*                                                            │
  │ Experiments:  experimentalRunEvents=true                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  run_event_throws_spec.js                                                        (1 of 1)
An error was thrown in your plugins file while executing the handler for the 'before:spec' event.

The error we received was:

Error: error thrown in before:spec
      [stack trace lines]


`
