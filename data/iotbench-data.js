window.__IOTBENCH_DATA__ = [
    {
        "category": "RIOT",
        "name": "COAP",
        "description": "Write a RIOT OS CoAP client for an ESP32 device. The program must initialize a WiFi connection in station mode. Upon connection, it uses ztimer and gcoap to send a confirmable CoAP POST request with a plain text payload over UDP to an EMQX server every second. Implement an asynchronous handler to process server replies, printing the response code, payload, source IP, and handling timeouts or errors. WIFI_SSID: 'Emnets', WIFI_PASS: 'emnets906', COAP_SERVER_ADDR: '47.116.28.238'. Input: None. Output: lines with response code, payload, source IP, or error/timeout text. "
    },
    {
        "category": "RIOT",
        "name": "eventperiodic",
        "description": "Write a RIOT OS application for an ESP32 device that periodically monitors and reports heap memory usage. The program must use the RIOT event periodic callback system to trigger a reporting function every 1000 milliseconds. The callback function must use the ESP32 heap capabilities API to retrieve and print the total free heap size, the largest free block size, and the total allocated bytes. The main function should initialize this periodic event, start it, and then sleep for ten seconds using ztimer to allow the reporting to execute. Input: None. Output: one line per second: free heap, largest block, allocated."
    },
    {
        "category": "RIOT",
        "name": "flash",
        "description": "Write a RIOT OS application for an ESP32 device that continuously writes a specific integer value to the Non-Volatile Storage (NVS). The program must initialize the NVS flash memory, handling version mismatches or no-free-page errors. In an infinite loop, it opens an NVS handle, writes a hardcoded temperature value, commits updates, and closes the handle, pausing for one second using xtimer. Input: None. Output: text lines for init, write, and commit (ok or error)."
    },
    {
        "category": "RIOT",
        "name": "irq",
        "description": "Write a RIOT OS application to test and verify the interrupt request disable and restore functionality. Validate irq_is_enabled, irq_disable, and irq_restore using atomic variables and xtimer callbacks. Phases include verifying state tracking, a control test with natural interruption, and a test where IRQs are explicitly disabled to force delayed execution. Input: None. Output: for each phase, SUCCESS or FAILURE."
    },
    {
        "category": "RIOT",
        "name": "mbox",
        "description": "Write a RIOT OS application to test the event timer mailbox functionality. Initialize a message queue, a mailbox, and two event timers. Configure mailbox events with increasing timeouts added in reverse order, and a separate trigger event with the longest timeout. The main thread blocks until the trigger is received, then verifies that all mailbox messages were delivered in ascending chronological order. Input: None. Output: order and pass/fail. "
    },
    {
        "category": "RIOT",
        "name": "mma8x5x",
        "description": "Write a RIOT OS application to interface with an MMA8x5x accelerometer over I2C.  The program must initialize the sensor using predefined parameters and enter a continuous loop. Inside the loop, read the X, Y, and Z acceleration data in milli-g and print the values to the standard output every 100 milliseconds using xtimer. Input: None. Output: an init line, then X, Y, Z in milli-g each period. "
    },
    {
        "category": "RIOT",
        "name": "mpu9x50",
        "description": "Write a RIOT OS application to interface with the MPU-9X50 9-axis motion tracking device.  The program must initialize the sensor, configure the sample rate to 200 Hz and the compass sample rate to 100 Hz, and verify these settings. After printing the configuration details, it should enter an infinite loop. Inside the loop, read and print the accelerometer data in milli-g, gyroscope data in dps, compass data in micro Tesla, and temperature in milli-degrees Celsius every second using ztimer. Input: None. Output: config once, then one line per second with all required sensor numbers. "
    },
    {
        "category": "RIOT",
        "name": "paho_mqtt",
        "description": "Write a RIOT OS application to publish telemetry data via MQTT while concurrently controlling an LED.  The program must initialize a GPIO pin and set up a Paho MQTT client. It should spawn a separate thread to toggle the LED state every second for 20 iterations. The main thread must enter an infinite loop where it continuously connects to an MQTT broker using predefined credentials, publishes a JSON-formatted integer temperature payload to a specific telemetry topic, waits for 5 seconds using ztimer, and then disconnects. Input: None. Output: connect, publish, and disconnect. "
    },
    {
        "category": "RIOT",
        "name": "emcute",
        "description": "Write a RIOT OS application to implement an MQTT-SN client using the emcute module. The program must initialize a message queue and spawn a dedicated thread for the emcute event loop. It should connect to an MQTT-SN gateway using a hardcoded IPv4 address and default port, then subscribe to a specific topic with QoS 0, providing a callback to print received messages. Finally, the main thread must enter an infinite loop, publishing a static text payload to the subscribed topic every 5 seconds using xtimer. Input: None. Output: connect, subscribe, publish/receive. "
    },
    {
        "category": "RIOT",
        "name": "rtc",
        "description": "Write a RIOT OS application to test the Real-Time Clock (RTC) peripheral. The program must initialize the RTC, retrieve and print the current time, and then set the clock to a hardcoded date and time (June 1, 2024). It should then configure an RTC alarm to trigger 5 seconds later, providing a callback function that prints a notification. The main thread must wait in a loop using xtimer until the alarm goes off. Input: None. Output: time before set, time after set, alarm time, one line when alarm runs. "
    },
    {
        "category": "RIOT",
        "name": "thread",
        "description": "Write a RIOT OS application to demonstrate multi-threading capabilities. The program must define a standard thread function that continuously prints its process ID and sleeps for one second using xtimer. The main function should allocate two separate memory stacks and spawn two independent threads executing this common function at a priority level higher than the main thread. After spawning the threads, the main thread must enter an infinite loop, periodically printing a status message and sleeping for two seconds. Input: None. Output: interleaved print lines from main and two child threads. "
    },
    {
        "category": "RIOT",
        "name": "ipc_msg",
        "description": "Write a RIOT OS application to test synchronous Inter-Process Communication (IPC) using messages.  The program must define two threads. The first thread acts as a client, sending a message containing a pointer to a local counter to the second thread in a loop for 10 iterations, and waiting for a synchronous reply. The second thread acts as a server, receiving the message, incrementing both the client's counter via the received pointer and its own local counter, printing their values, and sending a reply. The client thread must validate the integrity of the pointers and data upon each reply. Input: None. Output: counter values each round, then a final pass/fail line. "
    },
    {
        "category": "RIOT",
        "name": "xtimer",
        "description": "Write a RIOT OS application to demonstrate periodic timer execution using the xtimer module. The program must define a timer callback function that prints a trigger message to the standard output and immediately re-arms the timer for another one-second interval. The main thread must initialize the timer structure with this callback, set it to fire for the first time after one second, and then enter an infinite loop that sleeps for 10 seconds per iteration to simulate background execution. Input: None. Output: a start line, then one tick line per second. "
    },
    {
        "category": "RIOT",
        "name": "posix_sockets",
        "description": "Write a RIOT OS application to implement a UDP client using POSIX socket APIs on an ESP32. The program must configure a target server IPv4 address and port, and create a datagram socket. It should execute a loop 1000 times where it verifies the ESP32 WiFi connection status, sends a hardcoded text payload to the server using sendto, prints the transmission result, and sleeps for 100 milliseconds using xtimer. Finally, the program must gracefully close the socket. Input: None. Output: WiFi up/down, bytes sent or error for each send. "
    },
    {
        "category": "RIOT",
        "name": "dht11_monitor",
        "description": "Write a RIOT OS application for an ESP32 to monitor temperature using a DHT11 sensor. The program must initialize a DHT11 sensor on a specific GPIO pin and an LED on another. In a continuous loop running every 5 seconds using xtimer, it must read the temperature and humidity. If the temperature exceeds a predefined threshold (e.g., 30\u00b0C), the LED must be turned on as a warning; otherwise, it must remain off. Input: None. Output: T, H, and a short line when the threshold is crossed. "
    },
    {
        "category": "RIOT",
        "name": "dht11_sensor",
        "description": "Write a RIOT OS application for an ESP32 to read temperature and humidity using a DHT11 sensor. The program must initialize the DHT11 sensor on a specific GPIO pin. In a continuous loop running every 5 seconds using xtimer, it must read the sensor data and print the formatted temperature and humidity values to the standard output. Input: None. Output: T and H each period. "
    },
    {
        "category": "RIOT",
        "name": "led_metronome",
        "description": "Write a RIOT OS application for ESP32: drive an external LED and read a six-axis IMU (MPU6050) over the bus documented for the board. From gravity estimate device pitch, map pitch angle to a beats-per-minute value (shallow angle \u2192 low BPM, vertical \u2192 higher BPM), expand about five seconds of on/off beat timing, then play that pattern on the LED and repeat. Input: None. Output: boot lines naming pins, then each cycle lines with pitch, BPM, period, command count, and read/generate/playback timing; sensor or GPIO errors if any."
    },
    {
        "category": "RIOT",
        "name": "mpu6050_loop",
        "description": "Write a RIOT OS application on ESP32 that initializes the same six-axis IMU to read only linear acceleration, polls at a fixed period, and prints a reduced-rate sample trace. Input: None. Output: one startup line, then lines with ax, ay, az in g and a running sample index when printing triggers."
    },
    {
        "category": "RIOT",
        "name": "breathing_led",
        "description": "Write a RIOT OS application for ESP32 that simulates a breathing effect on one LED by expanding a time sequence of short on/off segments over a few-second cycle, then playing that list on a GPIO, repeating. Input: None. Output: banner with those parameters, then per cycle a line with generated segment count and generation time, and a line when playback of that list finishes and its duration."
    },
    {
        "category": "RIOT",
        "name": "impact_recorder",
        "description": "Write a RIOT OS application for ESP32: sample the IMU accelerometer at a fixed rate into a one-second window, detect whether peak acceleration exceeds a threshold, persist the record-breaking magnitude in non-volatile key-value storage under a fixed namespace, and on event drive an LED alarm using a precomputed blink sequence. Input: None. Output: init lines including NVS result and last stored g if any, then per window a line with |a| when quiet or an impact line with stored value and alarm timing when an event is detected."
    },
    {
        "category": "RIOT",
        "name": "fall_detection_sos",
        "description": "Write a RIOT OS application for ESP32: fill a one-second buffer of accelerometer samples at a fixed rate, run a fall-detection policy using configurable thresholds and windows, and if a fall is decided emit a long international distress blink pattern on an LED. Input: None. Output: init lines with thresholds and rate, then each window either a no-fall line with |a| and components, or a fall line and a completion line with sample, detect, and pattern playback times."
    },
    {
        "category": "RIOT",
        "name": "imu_mqtt",
        "description": "Write a RIOT OS application for ESP32: one background thread continuously reads gyro rates into a bounded ring with mutual exclusion, while the main context waits for the network, connects to an MQTT broker, and on a short fixed period forms JSON containing a monotonic timestamp and a fixed number of the latest gyro triples in order, publishing it to a topic; if disconnected, queue payloads in RAM and send them after reconnect. Input: None. Output: connection attempt and result lines, each successful publish with topic, byte size, the JSON body, and whether it was queued backlog or live; publish errors."
    },
    {
        "category": "RIOT",
        "name": "mpu6050_mqtt_loop",
        "description": "Write a RIOT OS application for ESP32: one thread continuously samples accelerometer data into a ring, while the main loop waits for the network, connects to MQTT, and on a long fixed period publishes JSON with a timestamp and the latest x/y/z in g, using an in-RAM queue when the broker is unreachable. Input: None. Output: telemetry-style logs: WiFi or DHCP wait, connect, each send with topic, size, and JSON line; failures when applicable."
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_01",
        "description": "Create one TAP rule for the home_5 smart home: when the bathroom motion sensor detects motion, turn on the bathroom white light.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == true THEN set device 1 bathroom light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_5/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_5/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_5/spec/lumi.sensor_motion.v2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_02",
        "description": "Create one TAP rule for the home_5 smart home: when the bathroom motion sensor detects no motion, turn off the bathroom white light.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == false THEN set device 1 bathroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_5/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_5/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_5/spec/lumi.sensor_motion.v2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_03",
        "description": "Create one TAP rule for the home_5 smart home: when the bedroom illumination is below 100 lux, turn on the bedroom color light.",
        "answer": "IF device 5 bedroom illumination-sensor.illumination < 100 THEN set device 3 bedroom light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_5/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_04",
        "description": "Create one TAP rule for the home_5 smart home: when the bedroom illumination is below 100 lux, set the bedroom color light brightness to 70.",
        "answer": "IF device 5 bedroom illumination-sensor.illumination < 100 THEN set device 3 bedroom light.brightness = 70",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_5/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_05",
        "description": "Create one TAP rule for the home_5 smart home: when the bedroom illumination is below 100 lux, set the bedroom color light mode to Day.",
        "answer": "IF device 5 bedroom illumination-sensor.illumination < 100 THEN set device 3 bedroom light.mode = Day",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_5/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_06",
        "description": "Create one TAP rule for the home_5 smart home: when the bedroom illumination is below 50 lux, set the bedroom color light color temperature to 3000 kelvin.",
        "answer": "IF device 5 bedroom illumination-sensor.illumination < 50 THEN set device 3 bedroom light.color-temperature = 3000",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_5/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_07",
        "description": "Create one TAP rule for the home_5 smart home: when the bedroom illumination is above 500 lux, turn off the bedroom color light.",
        "answer": "IF device 5 bedroom illumination-sensor.illumination > 500 THEN set device 3 bedroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_5/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_5/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_08",
        "description": "Create one TAP rule for the home_5 smart home: when the bedroom air conditioner temperature is above 28 celsius, turn on the bedroom air conditioner; then set the bedroom air conditioner mode to Cool; then set the bedroom air conditioner target temperature to 26 celsius.",
        "answer": "IF device 4 bedroom environment.temperature > 28 THEN set device 4 bedroom air-conditioner.on = true AND set device 4 bedroom air-conditioner.mode = Cool AND set device 4 bedroom air-conditioner.target-temperature = 26",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_5/spec/xiaomi.aircondition.mc7.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_09",
        "description": "Create one TAP rule for the home_5 smart home: when the bedroom air conditioner temperature is above 30 celsius, set the bedroom air conditioner fan level to Level3.",
        "answer": "IF device 4 bedroom environment.temperature > 30 THEN set device 4 bedroom fan-control.fan-level = Level3",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_5/spec/xiaomi.aircondition.mc7.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_5_tap_10",
        "description": "Create one TAP rule for the home_5 smart home: when the bedroom air conditioner temperature is below 24 celsius, turn off the bedroom air conditioner.",
        "answer": "IF device 4 bedroom environment.temperature < 24 THEN set device 4 bedroom air-conditioner.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_5/info.json",
            "IoTBench/IFTTT/home_5/devices.json",
            "IoTBench/IFTTT/home_5/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_5/spec/xiaomi.aircondition.mc7.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_01",
        "description": "Create one TAP rule for the home_10 smart home: when the bathroom motion sensor detects motion and the bathroom illumination is below 80 lux, turn on the bathroom white light.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == true AND device 3 bathroom illumination-sensor.illumination < 80 THEN set device 1 bathroom light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_10/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_10/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_02",
        "description": "Create one TAP rule for the home_10 smart home: when the bathroom motion sensor detects motion and the bathroom illumination is below 80 lux, set the bathroom white light brightness to 80.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == true AND device 3 bathroom illumination-sensor.illumination < 80 THEN set device 1 bathroom light.brightness = 80",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_10/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_10/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_03",
        "description": "Create one TAP rule for the home_10 smart home: when the bathroom motion sensor detects no motion, turn off the bathroom white light.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == false THEN set device 1 bathroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_10/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sensor_motion.v2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_04",
        "description": "Create one TAP rule for the home_10 smart home: when the bathroom illumination is above 500 lux, turn off the bathroom white light.",
        "answer": "IF device 3 bathroom illumination-sensor.illumination > 500 THEN set device 1 bathroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_10/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_05",
        "description": "Create one TAP rule for the home_10 smart home: when the bedroom temperature is above 28 celsius, turn on the bedroom air conditioner.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.temperature > 28 THEN set device 5 bedroom air-conditioner.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_10/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_06",
        "description": "Create one TAP rule for the home_10 smart home: when the bedroom temperature is above 28 celsius, set the bedroom air conditioner mode to Cool; then set the bedroom air conditioner target temperature to 26 celsius.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.temperature > 28 THEN set device 5 bedroom air-conditioner.mode = Cool AND set device 5 bedroom air-conditioner.target-temperature = 26",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_10/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_07",
        "description": "Create one TAP rule for the home_10 smart home: when the bedroom temperature is above 30 celsius, set the bedroom air conditioner fan level to Level4.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.temperature > 30 THEN set device 5 bedroom fan-control.fan-level = Level4",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_10/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_08",
        "description": "Create one TAP rule for the home_10 smart home: when the bedroom temperature is below 24 celsius, turn off the bedroom air conditioner.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.temperature < 24 THEN set device 5 bedroom air-conditioner.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_10/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_09",
        "description": "Create one TAP rule for the home_10 smart home: when the bedroom relative humidity is above 70%, set the bedroom air conditioner mode to Dry.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.relative-humidity > 70 THEN set device 5 bedroom air-conditioner.mode = Dry",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_10/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_10/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_10",
        "description": "Create one TAP rule for the home_10 smart home: when the bedroom illumination is below 100 lux, turn on the bedroom color light; then set the bedroom color light brightness to 60.",
        "answer": "IF device 6 bedroom illumination-sensor.illumination < 100 THEN set device 4 bedroom light.on = true AND set device 4 bedroom light.brightness = 60",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_11",
        "description": "Create one TAP rule for the home_10 smart home: when the bedroom illumination is below 50 lux, set the bedroom color light color temperature to 3000 kelvin.",
        "answer": "IF device 6 bedroom illumination-sensor.illumination < 50 THEN set device 4 bedroom light.color-temperature = 3000",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_12",
        "description": "Create one TAP rule for the home_10 smart home: when the bedroom illumination is above 500 lux, turn off the bedroom color light.",
        "answer": "IF device 6 bedroom illumination-sensor.illumination > 500 THEN set device 4 bedroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_13",
        "description": "Create one TAP rule for the home_10 smart home: when the living room motion sensor detects motion and the living room illumination is below 80 lux, turn on the living room color light; then set the living room color light brightness to 70.",
        "answer": "IF device 9 living room motion-sensor.motion-state == true AND device 10 living room illumination-sensor.illumination < 80 THEN set device 8 living room light.on = true AND set device 8 living room light.brightness = 70",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_10/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_10_tap_14",
        "description": "Create one TAP rule for the home_10 smart home: when the living room motion sensor detects no motion, turn off the living room color light.",
        "answer": "IF device 9 living room motion-sensor.motion-state == false THEN set device 8 living room light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_10/info.json",
            "IoTBench/IFTTT/home_10/devices.json",
            "IoTBench/IFTTT/home_10/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_10/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_10/spec/lumi.sensor_motion.v2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_01",
        "description": "Create one TAP rule for the home_20 smart home: when the bathroom motion sensor detects motion and the bathroom illumination is below 80 lux, turn on the bathroom white light.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == true AND device 3 bathroom illumination-sensor.illumination < 80 THEN set device 1 bathroom light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_02",
        "description": "Create one TAP rule for the home_20 smart home: when the bathroom motion sensor detects no motion, turn off the bathroom white light.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == false THEN set device 1 bathroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sensor_motion.v2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_03",
        "description": "Create one TAP rule for the home_20 smart home: when the bathroom illumination is above 500 lux, turn off the bathroom white light.",
        "answer": "IF device 3 bathroom illumination-sensor.illumination > 500 THEN set device 1 bathroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_04",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom illumination is below 100 lux, turn on the bedroom color light; then set the bedroom color light brightness to 60.",
        "answer": "IF device 6 bedroom illumination-sensor.illumination < 100 THEN set device 4 bedroom light.on = true AND set device 4 bedroom light.brightness = 60",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_05",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom illumination is above 500 lux, turn off the bedroom color light.",
        "answer": "IF device 6 bedroom illumination-sensor.illumination > 500 THEN set device 4 bedroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_06",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom temperature is above 28 celsius, turn on the bedroom air conditioner; then set the bedroom air conditioner mode to Cool; then set the bedroom air conditioner target temperature to 26 celsius.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.temperature > 28 THEN set device 5 bedroom air-conditioner.on = true AND set device 5 bedroom air-conditioner.mode = Cool AND set device 5 bedroom air-conditioner.target-temperature = 26",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_20/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_20/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_20/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_07",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom temperature is above 30 celsius, set the bedroom air conditioner fan level to Level4.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.temperature > 30 THEN set device 5 bedroom fan-control.fan-level = Level4",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_20/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_20/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_20/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_08",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom temperature is below 24 celsius, turn off the bedroom air conditioner.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.temperature < 24 THEN set device 5 bedroom air-conditioner.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_20/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_20/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_20/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_09",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom relative humidity is below 35%, turn on the bedroom humidifier; then set the bedroom humidifier target humidity to 50%.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.relative-humidity < 35 THEN set device 10 bedroom humidifier.on = true AND set device 10 bedroom humidifier.target-humidity = 50",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_20/spec/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_20/info/zhimi.humidifier.ca4.json",
            "IoTBench/IFTTT/home_20/spec/zhimi.humidifier.ca4.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_10",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom relative humidity is above 60%, turn off the bedroom humidifier.",
        "answer": "IF device 7 bedroom temperature-humidity-sensor.relative-humidity > 60 THEN set device 10 bedroom humidifier.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_20/spec/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_20/info/zhimi.humidifier.ca4.json",
            "IoTBench/IFTTT/home_20/spec/zhimi.humidifier.ca4.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_11",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom illumination is above 500 lux, set the bedroom curtain motor control to Open.",
        "answer": "IF device 6 bedroom illumination-sensor.illumination > 500 THEN set device 9 bedroom curtain.motor-control = Open",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/info/lumi.curtain.mcn005.json",
            "IoTBench/IFTTT/home_20/spec/lumi.curtain.mcn005.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_12",
        "description": "Create one TAP rule for the home_20 smart home: when the bedroom illumination is below 50 lux, set the bedroom curtain motor control to Close.",
        "answer": "IF device 6 bedroom illumination-sensor.illumination < 50 THEN set device 9 bedroom curtain.motor-control = Close",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/info/lumi.curtain.mcn005.json",
            "IoTBench/IFTTT/home_20/spec/lumi.curtain.mcn005.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_13",
        "description": "Create one TAP rule for the home_20 smart home: when the living room motion sensor detects motion and the living room illumination is below 80 lux, turn on the living room color light; then set the living room color light brightness to 70.",
        "answer": "IF device 12 living room motion-sensor.motion-state == true AND device 13 living room illumination-sensor.illumination < 80 THEN set device 11 living room light.on = true AND set device 11 living room light.brightness = 70",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_20/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_14",
        "description": "Create one TAP rule for the home_20 smart home: when the living room motion sensor detects no motion, turn off the living room white light.",
        "answer": "IF device 12 living room motion-sensor.motion-state == false THEN set device 14 living room light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.mono1.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_15",
        "description": "Create one TAP rule for the home_20 smart home: when the living room illumination is below 60 lux, turn on the living room \u5e26\u98ce\u6247\u7684color light; then set the living room \u5e26\u98ce\u6247\u7684color light brightness to 65.",
        "answer": "IF device 13 living room illumination-sensor.illumination < 60 THEN set device 15 living room light.on = true AND set device 15 living room light.brightness = 65",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.fancl6.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.fancl6.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_16",
        "description": "Create one TAP rule for the home_20 smart home: when the living room illumination is above 500 lux, turn off the living room \u5e26\u98ce\u6247\u7684color light.",
        "answer": "IF device 13 living room illumination-sensor.illumination > 500 THEN set device 15 living room light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.fancl6.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.fancl6.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_17",
        "description": "Create one TAP rule for the home_20 smart home: when the living room air purifier PM2.5 density is above 75, turn on the living room air purifier; then set the living room air purifier mode to Auto.",
        "answer": "IF device 16 living room environment.pm2.5-density > 75 THEN set device 16 living room air-purifier.on = true AND set device 16 living room air-purifier.mode = Auto",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/dmaker.airpurifier.f20.json",
            "IoTBench/IFTTT/home_20/spec/dmaker.airpurifier.f20.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_18",
        "description": "Create one TAP rule for the home_20 smart home: when the living room \u7acb\u5f0fair conditioner temperature is above 29 celsius, turn on the living room \u7acb\u5f0fair conditioner; then set the living room \u7acb\u5f0fair conditioner target temperature to 26 celsius.",
        "answer": "IF device 17 living room environment.temperature > 29 THEN set device 17 living room air-conditioner.on = true AND set device 17 living room air-conditioner.target-temperature = 26",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_20/spec/xiaomi.aircondition.mc7.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_19",
        "description": "Create one TAP rule for the home_20 smart home: when the kitchen motion sensor detects motion, turn on the kitchen white light.",
        "answer": "IF device 20 kitchen motion-sensor.motion-state == true THEN set device 18 kitchen light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_20/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_20/spec/lumi.sensor_motion.v2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_20",
        "description": "Create one TAP rule for the home_20 smart home: when the kitchen range hood PM2.5 density is above 100, turn on the kitchen range hood; then set the kitchen range hood fan level to High.",
        "answer": "IF device 19 kitchen environment.pm2.5-density > 100 THEN set device 19 kitchen hood.on = true AND set device 19 kitchen fan-control.fan-level = High",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/cykj.hood.jyj22.json",
            "IoTBench/IFTTT/home_20/spec/cykj.hood.jyj22.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_20_tap_21",
        "description": "Create one TAP rule for the home_20 smart home: when the kitchen left stove level is not Close, turn on the kitchen range hood.",
        "answer": "IF device 19 kitchen hood-stove-integrate.left-stove-level != Close THEN set device 19 kitchen light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_20/info.json",
            "IoTBench/IFTTT/home_20/devices.json",
            "IoTBench/IFTTT/home_20/info/cykj.hood.jyj22.json",
            "IoTBench/IFTTT/home_20/spec/cykj.hood.jyj22.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_01",
        "description": "Create one TAP rule for the home_30 smart home: when the bathroom motion sensor detects motion and the bathroom illumination is below 80 lux, turn on the bathroom white light.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == true AND device 3 bathroom illumination-sensor.illumination < 80 THEN set device 1 bathroom light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_30/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_02",
        "description": "Create one TAP rule for the home_30 smart home: when the bathroom motion sensor detects no motion, turn off the bathroom white light.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == false THEN set device 1 bathroom light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_30/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sensor_motion.v2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_03",
        "description": "Create one TAP rule for the home_30 smart home: when the bathroom motion sensor detects motion, turn on the bathroom water heater; then set the bathroom water heater target temperature to 45 celsius.",
        "answer": "IF device 2 bathroom motion-sensor.motion-state == true THEN set device 4 bathroom water-heater.on = true AND set device 4 bathroom water-heater.target-temperature = 45",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/info/viomi.waterheater.e14.json",
            "IoTBench/IFTTT/home_30/spec/viomi.waterheater.e14.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_04",
        "description": "Create one TAP rule for the home_30 smart home: when the bathroom water-heater temperature reaches at least 45 celsius, set the bathroom water heater mode to Normal.",
        "answer": "IF device 4 bathroom water-heater.temperature >= 45 THEN set device 4 bathroom water-heater.mode = Normal",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/viomi.waterheater.e14.json",
            "IoTBench/IFTTT/home_30/spec/viomi.waterheater.e14.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_05",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 illumination is below 100 lux, turn on the bedroom 1 color light; then set the bedroom 1 color light brightness to 60.",
        "answer": "IF device 7 bedroom 1 illumination-sensor.illumination < 100 THEN set device 5 bedroom 1 light.on = true AND set device 5 bedroom 1 light.brightness = 60",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_30/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_06",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 illumination is above 500 lux, turn off the bedroom 1 color light.",
        "answer": "IF device 7 bedroom 1 illumination-sensor.illumination > 500 THEN set device 5 bedroom 1 light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_30/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_07",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 temperature is above 28 celsius, turn on the bedroom 1 air conditioner; then set the bedroom 1 air conditioner mode to Cool; then set the bedroom 1 air conditioner target temperature to 26 celsius.",
        "answer": "IF device 8 bedroom 1 temperature-humidity-sensor.temperature > 28 THEN set device 6 bedroom 1 air-conditioner.on = true AND set device 6 bedroom 1 air-conditioner.mode = Cool AND set device 6 bedroom 1 air-conditioner.target-temperature = 26",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_30/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_30/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_08",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 temperature is below 24 celsius, turn off the bedroom 1 air conditioner.",
        "answer": "IF device 8 bedroom 1 temperature-humidity-sensor.temperature < 24 THEN set device 6 bedroom 1 air-conditioner.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_30/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_30/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_09",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 relative humidity is below 35%, turn on the bedroom 1 humidifier; then set the bedroom 1 humidifier target humidity to 50%.",
        "answer": "IF device 8 bedroom 1 temperature-humidity-sensor.relative-humidity < 35 THEN set device 11 bedroom 1 humidifier.on = true AND set device 11 bedroom 1 humidifier.target-humidity = 50",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/spec/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/info/zhimi.humidifier.ca4.json",
            "IoTBench/IFTTT/home_30/spec/zhimi.humidifier.ca4.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_10",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 relative humidity is above 60%, turn off the bedroom 1 humidifier.",
        "answer": "IF device 8 bedroom 1 temperature-humidity-sensor.relative-humidity > 60 THEN set device 11 bedroom 1 humidifier.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/spec/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/info/zhimi.humidifier.ca4.json",
            "IoTBench/IFTTT/home_30/spec/zhimi.humidifier.ca4.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_11",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 relative humidity is above 70%, turn on the bedroom 1 dehumidifier; then set the bedroom 1 dehumidifier target humidity to 55%.",
        "answer": "IF device 8 bedroom 1 temperature-humidity-sensor.relative-humidity > 70 THEN set device 12 bedroom 1 dehumidifier.on = true AND set device 12 bedroom 1 dehumidifier.target-humidity = 55",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/spec/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/info/dmaker.derh.50l.json",
            "IoTBench/IFTTT/home_30/spec/dmaker.derh.50l.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_12",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 relative humidity is below 55%, turn off the bedroom 1 dehumidifier.",
        "answer": "IF device 8 bedroom 1 temperature-humidity-sensor.relative-humidity < 55 THEN set device 12 bedroom 1 dehumidifier.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/spec/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/info/dmaker.derh.50l.json",
            "IoTBench/IFTTT/home_30/spec/dmaker.derh.50l.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_13",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 illumination is above 500 lux, set the bedroom 1 curtain target position to 100%.",
        "answer": "IF device 7 bedroom 1 illumination-sensor.illumination > 500 THEN set device 10 bedroom 1 curtain.target-position = 100",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/info/lumi.curtain.mcn005.json",
            "IoTBench/IFTTT/home_30/spec/lumi.curtain.mcn005.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_14",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 1 illumination is below 50 lux, set the bedroom 1 curtain target position to 0%.",
        "answer": "IF device 7 bedroom 1 illumination-sensor.illumination < 50 THEN set device 10 bedroom 1 curtain.target-position = 0",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/info/lumi.curtain.mcn005.json",
            "IoTBench/IFTTT/home_30/spec/lumi.curtain.mcn005.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_15",
        "description": "Create one TAP rule for the home_30 smart home: when the living room motion sensor detects motion and the living room illumination is below 80 lux, turn on the living room color light; then set the living room color light brightness to 70.",
        "answer": "IF device 14 living room motion-sensor.motion-state == true AND device 15 living room illumination-sensor.illumination < 80 THEN set device 13 living room light.on = true AND set device 13 living room light.brightness = 70",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_30/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sen_ill.mgl01.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_16",
        "description": "Create one TAP rule for the home_30 smart home: when the living room motion sensor detects no motion, turn off the living room white light.",
        "answer": "IF device 14 living room motion-sensor.motion-state == false THEN set device 16 living room light.on = false",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.mono1.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_17",
        "description": "Create one TAP rule for the home_30 smart home: when the living room illumination is below 60 lux, turn on the living room \u5e26\u98ce\u6247\u7684color light; then turn on the living room \u5e26\u98ce\u6247\u7684color light.",
        "answer": "IF device 15 living room illumination-sensor.illumination < 60 THEN set device 17 living room light.on = true AND set device 17 living room fan.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.fancl6.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.fancl6.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_18",
        "description": "Create one TAP rule for the home_30 smart home: when the living room air purifier PM2.5 density is above 75, turn on the living room air purifier; then set the living room air purifier mode to Auto.",
        "answer": "IF device 18 living room environment.pm2.5-density > 75 THEN set device 18 living room air-purifier.on = true AND set device 18 living room air-purifier.mode = Auto",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/dmaker.airpurifier.f20.json",
            "IoTBench/IFTTT/home_30/spec/dmaker.airpurifier.f20.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_19",
        "description": "Create one TAP rule for the home_30 smart home: when the living room \u7acb\u5f0fair conditioner temperature is above 29 celsius, turn on the living room \u7acb\u5f0fair conditioner; then set the living room \u7acb\u5f0fair conditioner target temperature to 26 celsius.",
        "answer": "IF device 19 living room environment.temperature > 29 THEN set device 19 living room air-conditioner.on = true AND set device 19 living room air-conditioner.target-temperature = 26",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_30/spec/xiaomi.aircondition.mc7.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_20",
        "description": "Create one TAP rule for the home_30 smart home: when the kitchen motion sensor detects motion, turn on the kitchen white light; then turn on the kitchen ceiling fan.",
        "answer": "IF device 22 kitchen motion-sensor.motion-state == true THEN set device 20 kitchen light.on = true AND set device 23 kitchen ceiling-fan.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.mono1.json",
            "IoTBench/IFTTT/home_30/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/info/yeelink.ven_fan.vf3.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.ven_fan.vf3.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_21",
        "description": "Create one TAP rule for the home_30 smart home: when the kitchen motion sensor detects no motion, set the kitchen ceiling fan off-delay time to 10 minutes.",
        "answer": "IF device 22 kitchen motion-sensor.motion-state == false THEN set device 23 kitchen ceiling-fan.off-delay-time = 10",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sensor_motion.v2.json",
            "IoTBench/IFTTT/home_30/info/yeelink.ven_fan.vf3.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.ven_fan.vf3.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_22",
        "description": "Create one TAP rule for the home_30 smart home: when the kitchen range hood PM2.5 density is above 100, turn on the kitchen range hood; then set the kitchen range hood fan level to High.",
        "answer": "IF device 21 kitchen environment.pm2.5-density > 100 THEN set device 21 kitchen hood.on = true AND set device 21 kitchen fan-control.fan-level = High",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/cykj.hood.jyj22.json",
            "IoTBench/IFTTT/home_30/spec/cykj.hood.jyj22.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_23",
        "description": "Create one TAP rule for the home_30 smart home: when the kitchen left stove level is not Close, turn on the kitchen range hood.",
        "answer": "IF device 21 kitchen hood-stove-integrate.left-stove-level != Close THEN set device 21 kitchen light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/cykj.hood.jyj22.json",
            "IoTBench/IFTTT/home_30/spec/cykj.hood.jyj22.json"
        ]
    },
    {
        "category": "IFTTT",
        "name": "home_30_tap_24",
        "description": "Create one TAP rule for the home_30 smart home: when the bedroom 2 temperature is above 28 celsius and the bedroom 2 illumination is below 100 lux, turn on the bedroom 2 air conditioner; then turn on the bedroom 2 color light.",
        "answer": "IF device 27 bedroom 2 temperature-humidity-sensor.temperature > 28 AND device 26 bedroom 2 illumination-sensor.illumination < 100 THEN set device 25 bedroom 2 air-conditioner.on = true AND set device 24 bedroom 2 light.on = true",
        "dependencyFiles": [
            "IoTBench/IFTTT/home_30/info.json",
            "IoTBench/IFTTT/home_30/devices.json",
            "IoTBench/IFTTT/home_30/info/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_30/spec/yeelink.light.color2.json",
            "IoTBench/IFTTT/home_30/info/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_30/spec/xiaomi.aircondition.mc7.json",
            "IoTBench/IFTTT/home_30/info/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/spec/lumi.sen_ill.mgl01.json",
            "IoTBench/IFTTT/home_30/info/miaomiaoce.sensor_ht.t2.json",
            "IoTBench/IFTTT/home_30/spec/miaomiaoce.sensor_ht.t2.json"
        ]
    },
    {
        "category": "Sensing",
        "name": "ecg_heartbeat_detection",
        "source": "AutoIOT",
        "source_url": "https://lemingshen.github.io/projects/autoiot/",
        "source_repository": "https://github.com/lemingshen/AutoIOT",
        "source_dataset_url": "https://mypikpak.com/s/VOOMZ8bBd1AtByZBwyeqLvLDo1",
        "source_note": "AutoIOT evaluates four representative AIoT sensing applications; dataset download is linked by the project README.",
        "modality": "ECG",
        "description": "Implement an ECG heartbeat detection program that reads MIT-BIH-style ECG records, preprocesses the waveform, detects R-peaks, and reports heartbeat positions and evaluation metrics.",
        "expected_output": "Executable Python program with detected R-peak indices, heartbeat count, accuracy within a tolerance window, and MAE against annotations.",
        "test_points": [
            {
                "id": "tp1",
                "metric": "input_contract",
                "expected": "Accept an ECG dataset path or record folder as input."
            },
            {
                "id": "tp2",
                "metric": "preprocessing",
                "expected": "Apply ECG-appropriate filtering or denoising before peak detection."
            },
            {
                "id": "tp3",
                "metric": "algorithm",
                "expected": "Use an R-peak detection method suitable for ECG, such as adaptive thresholding, Pan-Tompkins-style processing, wavelet processing, or comparable logic."
            },
            {
                "id": "tp4",
                "metric": "output_contract",
                "expected": "Return or print detected R-peak sample indices and heartbeat count."
            },
            {
                "id": "tp5",
                "metric": "evaluation",
                "expected": "Compute detection accuracy within a tolerance window and MAE versus ground truth annotations."
            }
        ],
        "dependencies": [
            "https://github.com/lemingshen/AutoIOT",
            "https://lemingshen.github.io/projects/autoiot/",
            "https://mypikpak.com/s/VOOMZ8bBd1AtByZBwyeqLvLDo1"
        ]
    },
    {
        "category": "Sensing",
        "name": "imu_har",
        "source": "AutoIOT",
        "source_url": "https://lemingshen.github.io/projects/autoiot/",
        "source_repository": "https://github.com/lemingshen/AutoIOT",
        "source_dataset_url": "https://mypikpak.com/s/VOOMZ8bBd1AtByZBwyeqLvLDo1",
        "source_note": "AutoIOT evaluates four representative AIoT sensing applications; dataset download is linked by the project README.",
        "modality": "IMU",
        "description": "Implement an IMU-based human activity recognition pipeline for WISDM-style accelerometer data, including preprocessing, windowing, feature extraction or model training, and activity classification.",
        "expected_output": "Executable Python program that predicts activity labels and reports classification accuracy on held-out data.",
        "test_points": [
            {
                "id": "tp1",
                "metric": "input_contract",
                "expected": "Read WISDM-style raw IMU records with user, activity, timestamp, and axis values."
            },
            {
                "id": "tp2",
                "metric": "preprocessing",
                "expected": "Clean malformed rows and normalize or standardize accelerometer channels."
            },
            {
                "id": "tp3",
                "metric": "segmentation",
                "expected": "Segment the stream into fixed or sliding windows suitable for HAR."
            },
            {
                "id": "tp4",
                "metric": "algorithm",
                "expected": "Train or apply a classifier for activity labels using time-domain, frequency-domain, or learned features."
            },
            {
                "id": "tp5",
                "metric": "evaluation",
                "expected": "Report classification accuracy and preserve label mapping."
            }
        ],
        "dependencies": [
            "https://github.com/lemingshen/AutoIOT",
            "https://lemingshen.github.io/projects/autoiot/",
            "https://mypikpak.com/s/VOOMZ8bBd1AtByZBwyeqLvLDo1"
        ]
    },
    {
        "category": "Sensing",
        "name": "mmwave_har",
        "source": "AutoIOT",
        "source_url": "https://lemingshen.github.io/projects/autoiot/",
        "source_repository": "https://github.com/lemingshen/AutoIOT",
        "source_dataset_url": "https://mypikpak.com/s/VOOMZ8bBd1AtByZBwyeqLvLDo1",
        "source_note": "AutoIOT evaluates four representative AIoT sensing applications; dataset download is linked by the project README.",
        "modality": "mmWave",
        "description": "Implement a mmWave-based human activity recognition pipeline for an XRF55-style dataset, processing high-dimensional radar data and classifying activities.",
        "expected_output": "Executable Python program that loads mmWave samples, trains or applies a model, and reports activity classification accuracy.",
        "test_points": [
            {
                "id": "tp1",
                "metric": "input_contract",
                "expected": "Accept a folder of mmWave samples and labels."
            },
            {
                "id": "tp2",
                "metric": "preprocessing",
                "expected": "Normalize high-dimensional mmWave tensors or feature maps before classification."
            },
            {
                "id": "tp3",
                "metric": "algorithm",
                "expected": "Use a model appropriate for radar/HAR data, such as a CNN or ResNet-style classifier."
            },
            {
                "id": "tp4",
                "metric": "resource",
                "expected": "Account for high dimensionality with batching, compact tensors, or efficient loaders."
            },
            {
                "id": "tp5",
                "metric": "evaluation",
                "expected": "Report classification accuracy on a validation or test split."
            }
        ],
        "dependencies": [
            "https://github.com/lemingshen/AutoIOT",
            "https://lemingshen.github.io/projects/autoiot/",
            "https://mypikpak.com/s/VOOMZ8bBd1AtByZBwyeqLvLDo1"
        ]
    },
    {
        "category": "Sensing",
        "name": "multimodal_har",
        "source": "AutoIOT",
        "source_url": "https://lemingshen.github.io/projects/autoiot/",
        "source_repository": "https://github.com/lemingshen/AutoIOT",
        "source_dataset_url": "https://mypikpak.com/s/VOOMZ8bBd1AtByZBwyeqLvLDo1",
        "source_note": "AutoIOT evaluates four representative AIoT sensing applications; dataset download is linked by the project README.",
        "modality": "multimodal",
        "description": "Implement a multimodal human activity recognition pipeline that combines multiple sensor modalities with separate encoders and a fusion classifier.",
        "expected_output": "Executable Python program that loads multimodal sensor features, fuses modality representations, predicts activities, and reports accuracy plus resource metrics when available.",
        "test_points": [
            {
                "id": "tp1",
                "metric": "input_contract",
                "expected": "Load synchronized samples from multiple modalities."
            },
            {
                "id": "tp2",
                "metric": "architecture",
                "expected": "Use separate encoders or feature extractors before fusion."
            },
            {
                "id": "tp3",
                "metric": "fusion",
                "expected": "Concatenate, attend over, or otherwise combine modality embeddings before classification."
            },
            {
                "id": "tp4",
                "metric": "resource",
                "expected": "Support a memory-aware or efficient configuration for edge deployment."
            },
            {
                "id": "tp5",
                "metric": "evaluation",
                "expected": "Report classification accuracy and inference-time or memory metrics if available."
            }
        ],
        "dependencies": [
            "https://github.com/lemingshen/AutoIOT",
            "https://lemingshen.github.io/projects/autoiot/",
            "https://mypikpak.com/s/VOOMZ8bBd1AtByZBwyeqLvLDo1"
        ]
    },
    {
        "category": "Arduino",
        "name": "ds18b20_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "DS18B20",
        "components": [
            "DS18B20"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature every 5 seconds, display on serial monitor. Target components: DS18B20. Difficulty: Level 1. Module family: DS18B20 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds18b20_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "DS18B20",
        "components": [
            "DS18B20"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: When temperature exceeds 20 deg C, display temperature on serial monitor. Target components: DS18B20. Difficulty: Level 2. Module family: DS18B20 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds18b20_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DS18B20",
        "components": [
            "DS18B20",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record temperature every 5 seconds, store on SD card, LED indicator when recording. Target components: DS18B20, SD. Difficulty: Level 3. Module family: DS18B20 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds18b20_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DS18B20",
        "components": [
            "DS18B20",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record temperature every 5 seconds, store on SD card, activate an buzzer alarm if temperature exceeds 20 deg C. Target components: DS18B20, SD. Difficulty: Level 3. Module family: DS18B20 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds18b20_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DS18B20",
        "components": [
            "DS18B20",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display and graph temperature on an OLED display, updating every 5 seconds. Target components: DS18B20, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: DS18B20 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm35_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "LM35",
        "components": [
            "LM35"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature every second, display on serial monitor. Target components: LM35. Difficulty: Level 1. Module family: LM35 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm35_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "LM35",
        "components": [
            "LM35"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record temperature every 5 seconds, activate buzzer if > 20 deg C. Target components: LM35. Difficulty: Level 2. Module family: LM35 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm35_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LM35",
        "components": [
            "LM35",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log temperature to SD card every 3 seconds, alert if > 13 deg C. Target components: LM35, SD. Difficulty: Level 3. Module family: LM35 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm35_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LM35",
        "components": [
            "LM35",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display temperature in celsius and fahrenheit on OLED, update every 2 seconds. Target components: LM35, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: LM35 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm35_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LM35",
        "components": [
            "LM35",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate Buzzer for 1 second when temperature exceeds 13 deg C, and display temperature on OLED. Target components: LM35, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: LM35 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm75_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "LM75",
        "components": [
            "LM75B I2C"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature every second, display on serial monitor. Target components: LM75B I2C. Difficulty: Level 1. Module family: LM75 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm75_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "LM75",
        "components": [
            "LM75B I2C"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log temperature every 5 seconds, alert the buzzer 2 seconds if > 10 deg C. Target components: LM75B I2C. Difficulty: Level 2. Module family: LM75 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm75_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LM75",
        "components": [
            "LM75B I2C",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Monitor temperature, display on OLED if < 13 deg C. Target components: LM75B I2C, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: LM75 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm75_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LM75",
        "components": [
            "LM75B I2C",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record temperature data to SD card every 4 seconds. Target components: LM75B I2C, SD. Difficulty: Level 3. Module family: LM75 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "lm75_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LM75",
        "components": [
            "LM75B I2C",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate Buzzer for 1 second when temperature below 13 deg C, and display temperature on OLED. Target components: LM75B I2C, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: LM75 (Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mlx90614_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "MLX90614",
        "components": [
            "MLX90614"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read ambient temperature output to serial monitor. Target components: MLX90614. Difficulty: Level 1. Module family: MLX90614 (Non-contact Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mlx90614_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "MLX90614",
        "components": [
            "MLX90614"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: If object temperature below 11 deg C, activate a buzzer. Target components: MLX90614. Difficulty: Level 2. Module family: MLX90614 (Non-contact Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mlx90614_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MLX90614",
        "components": [
            "MLX90614",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log temperature data to an SD card and if object temperature below 11 deg C, activate a buzzer for 1 second. Target components: MLX90614, SD. Difficulty: Level 3. Module family: MLX90614 (Non-contact Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mlx90614_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MLX90614",
        "components": [
            "MLX90614",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log temperature data to an SD card and if object temperature below 11 deg C, activate a LED for 1 second. Target components: MLX90614, SD. Difficulty: Level 3. Module family: MLX90614 (Non-contact Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mlx90614_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MLX90614",
        "components": [
            "MLX90614",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: If temperature less than 20 deg C, control Servo rotate 30 degree counterclockwise. Target components: MLX90614, Servo. Difficulty: Level 3. Module family: MLX90614 (Non-contact Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme280_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "BME280",
        "components": [
            "BME280"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display humidity readings every 5 seconds through serial monitor. Target components: BME280. Difficulty: Level 1. Module family: BME280 (Temperature, Humidity, and Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme280_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "BME280",
        "components": [
            "BME280",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log pressure when it drops below 1000 hPa. Target components: BME280, SD. Difficulty: Level 2. Module family: BME280 (Temperature, Humidity, and Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme280_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BME280",
        "components": [
            "BME280",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Trigger an alarm if humidity exceeds 80%. Target components: BME280, Buzzer. Difficulty: Level 3. Module family: BME280 (Temperature, Humidity, and Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme280_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BME280",
        "components": [
            "BME280",
            "PWM Fan Controller",
            "Fan"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Adjust fan speed based on temperature readings. Target components: BME280, PWM Fan Controller, Fan. Difficulty: Level 3. Module family: BME280 (Temperature, Humidity, and Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme280_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BME280",
        "components": [
            "BME280",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display all sensor data on an OLED screen, update every 3 seconds. Target components: BME280, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: BME280 (Temperature, Humidity, and Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme680_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "BME680",
        "components": [
            "Adafruit BME680"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature and display on serial monitor. Target components: Adafruit BME680. Difficulty: Level 1. Module family: BME680 (Environmental Sensor (Gas, Humidity, Temperature, Pressure)). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme680_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "BME680",
        "components": [
            "Adafruit BME680"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature, Humidity, Pressure and display on serial monitor. Target components: Adafruit BME680. Difficulty: Level 2. Module family: BME680 (Environmental Sensor (Gas, Humidity, Temperature, Pressure)). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme680_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BME680",
        "components": [
            "Adafruit BME680"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature, Humidity, Pressure every 5 seconds turn on the LED. Target components: Adafruit BME680. Difficulty: Level 3. Module family: BME680 (Environmental Sensor (Gas, Humidity, Temperature, Pressure)). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme680_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BME680",
        "components": [
            "Adafruit BME680",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record on SD card if humidity exceeds 20% or temperature below 30 deg C. Target components: Adafruit BME680, SD. Difficulty: Level 3. Module family: BME680 (Environmental Sensor (Gas, Humidity, Temperature, Pressure)). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bme680_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BME680",
        "components": [
            "Adafruit BME680",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Alert via LED and control Servo rotate 30 degree counterclockwise if humidity exceeds 20% are detected. Target components: Adafruit BME680, Servo. Difficulty: Level 3. Module family: BME680 (Environmental Sensor (Gas, Humidity, Temperature, Pressure)). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dht11_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "DHT11",
        "components": [
            "DHT11"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature and humidity every second, display on serial monitor. Target components: DHT11. Difficulty: Level 1. Module family: DHT11 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dht11_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "DHT11",
        "components": [
            "DHT11"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read humidity every second, if humidity over 20% turn on LED. Target components: DHT11. Difficulty: Level 2. Module family: DHT11 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dht11_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DHT11",
        "components": [
            "DHT11",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Alert via LED and control Servo rotate 30 degree counterclockwise if humidity exceeds 20%. Target components: DHT11, Servo. Difficulty: Level 3. Module family: DHT11 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dht11_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DHT11",
        "components": [
            "DHT11",
            "SD",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record temperature and humidity on SD card every 2 seconds and control Servo rotate 20 degree counterclockwise. Target components: DHT11, SD, Servo. Difficulty: Level 3. Module family: DHT11 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dht11_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DHT11",
        "components": [
            "DHT11",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature, if temperature exceeds 10 deg C show on OLED. Target components: DHT11, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: DHT11 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sht40_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "SHT40",
        "components": [
            "SHT40"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read temperature and humidity, display on serial monitor. Target components: SHT40. Difficulty: Level 1. Module family: SHT40 (High Precision Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sht40_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "SHT40",
        "components": [
            "SHT40"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read humidity every 2 seconds, if humidity over 10% turn on LED. Target components: SHT40. Difficulty: Level 2. Module family: SHT40 (High Precision Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sht40_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SHT40",
        "components": [
            "SHT40",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: If humidity > 10%, alert via LED and control Servo rotate 30 degree counterclockwise. Target components: SHT40, Servo. Difficulty: Level 3. Module family: SHT40 (High Precision Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sht40_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SHT40",
        "components": [
            "SHT40",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record temperature and humidity on SD card every 2 seconds and turn on LED. Target components: SHT40, SD. Difficulty: Level 3. Module family: SHT40 (High Precision Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sht40_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SHT40",
        "components": [
            "SHT40",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read humidity and temperature every second, if temperature exceeds 10 deg C record to SD card, and if humidity > 10% turn on LED. Target components: SHT40, SD. Difficulty: Level 3. Module family: SHT40 (High Precision Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "si7021_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "SI7021",
        "components": [
            "SI7021"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read humidity every 5 seconds, display on serial monitor. Target components: SI7021. Difficulty: Level 1. Module family: SI7021 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "si7021_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "SI7021",
        "components": [
            "SI7021",
            "EEPROM"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log temperature when humidity exceeds 60% to EEPROM. Target components: SI7021, EEPROM. Difficulty: Level 2. Module family: SI7021 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "si7021_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SI7021",
        "components": [
            "SI7021",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate a buzzer if humidity drops below 30%. Target components: SI7021, Buzzer. Difficulty: Level 3. Module family: SI7021 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "si7021_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SI7021",
        "components": [
            "SI7021",
            "PWM Fan Controller"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Use temperature to control fan speed via PWM signal. Target components: SI7021, PWM Fan Controller. Difficulty: Level 3. Module family: SI7021 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "si7021_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SI7021",
        "components": [
            "SI7021",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display both temperature and humidity on an OLED screen. Target components: SI7021, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: SI7021 (Temperature and Humidity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp085_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "BMP085",
        "components": [
            "BMP085"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read and display pressure data every 5 seconds. Target components: BMP085. Difficulty: Level 1. Module family: BMP085 (Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp085_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "BMP085",
        "components": [
            "BMP085",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log pressure over 30 minutes, alert if drops below 1000 hPa. Target components: BMP085, Buzzer. Difficulty: Level 2. Module family: BMP085 (Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp085_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BMP085",
        "components": [
            "BMP085",
            "SSD1306 OLED Display"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display pressure and temperature on OLED; update every 2 seconds. Target components: BMP085, SSD1306 OLED Display. Difficulty: Level 3. Module family: BMP085 (Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp085_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BMP085",
        "components": [
            "BMP085",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record data when pressure changes by more than 5 hPa, save to SD card. Target components: BMP085, SD. Difficulty: Level 3. Module family: BMP085 (Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp085_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BMP085",
        "components": [
            "BMP085",
            "HC-05 Bluetooth Module"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Alarm through bluetooth if pressure exceeds 1020 hPa. Target components: BMP085, HC-05 Bluetooth Module. Difficulty: Level 3. Module family: BMP085 (Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp280_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "BMP280",
        "components": [
            "BMP280"
        ],
        "modality": "Pressure",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read atmospheric pressure and output to serial monitor. Target components: BMP280. Difficulty: Level 1. Module family: BMP280 (Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp280_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "BMP280",
        "components": [
            "BMP280",
            "Buzzer"
        ],
        "modality": "Pressure",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log pressure data; activate buzzer if pressure drops below 1000 hPa. Target components: BMP280, Buzzer. Difficulty: Level 2. Module family: BMP280 (Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp280_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BMP280",
        "components": [
            "BMP280",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Pressure",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display pressure and temperature on OLED, update every 5 seconds. Target components: BMP280, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: BMP280 (Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp280_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BMP280",
        "components": [
            "BMP280",
            "Servo"
        ],
        "modality": "Pressure",
        "description": "Write an Arduino-compatible embedded IoT program for this task: If pressure < 1000 hPa, rotate a servo to 30 degree. Target components: BMP280, Servo. Difficulty: Level 3. Module family: BMP280 (Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bmp280_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BMP280",
        "components": [
            "BMP280",
            "SD"
        ],
        "modality": "Pressure",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record pressure data every minute, save to SD card with timestamp. Target components: BMP280, SD. Difficulty: Level 3. Module family: BMP280 (Pressure Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ms5611_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "MS5611",
        "components": [
            "MS5611"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read pressure every second, display on serial monitor. Target components: MS5611. Difficulty: Level 1. Module family: MS5611 (Precision Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ms5611_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "MS5611",
        "components": [
            "MS5611"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read pressure and temperature every second, if temperature exceeds 10 deg C turn on LED. Target components: MS5611. Difficulty: Level 2. Module family: MS5611 (Precision Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ms5611_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MS5611",
        "components": [
            "MS5611",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record pressure and temperature reading every 5 seconds if temperature exceeds 10 deg C rotate servo 20 degree, and if pressure > 800 mbar turn on LED.. Target components: MS5611, Servo. Difficulty: Level 3. Module family: MS5611 (Precision Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ms5611_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MS5611",
        "components": [
            "MS5611",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate a servo rotate 30 degree if pressure drops below 1200 mbar, and if rotate success, turn on LED. Target components: MS5611, Servo. Difficulty: Level 3. Module family: MS5611 (Precision Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ms5611_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MS5611",
        "components": [
            "MS5611",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log temperature and pressure to an SD card every 5 seconds and turn on LED. Target components: MS5611, SD. Difficulty: Level 3. Module family: MS5611 (Precision Pressure and Temperature Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bh1750_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "BH1750",
        "components": [
            "BH1750"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read light intensity, output to serial monitor. Target components: BH1750. Difficulty: Level 1. Module family: BH1750 (Light Intensity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bh1750_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "BH1750",
        "components": [
            "BH1750",
            "Buzzer"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: If light intensity below 110 lx, activate a buzzer. Target components: BH1750, Buzzer. Difficulty: Level 2. Module family: BH1750 (Light Intensity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bh1750_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BH1750",
        "components": [
            "BH1750",
            "SD"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log light intensity to an SD card every 5 seconds. Target components: BH1750, SD. Difficulty: Level 3. Module family: BH1750 (Light Intensity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bh1750_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BH1750",
        "components": [
            "BH1750",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display light intensity on OLED display, update every 5 seconds. Target components: BH1750, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: BH1750 (Light Intensity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "bh1750_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "BH1750",
        "components": [
            "BH1750",
            "LED"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Adjust LED brightness based on current light intensity. Target components: BH1750, LED. Difficulty: Level 3. Module family: BH1750 (Light Intensity Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ltr390_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "LTR390",
        "components": [
            "Adafruit LTR390"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read UV index and print to serial monitor. Target components: Adafruit LTR390. Difficulty: Level 1. Module family: LTR390 (UV Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ltr390_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "LTR390",
        "components": [
            "Adafruit LTR390",
            "SD"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log UV data only if UV index exceeds 3, every 5 seconds. Target components: Adafruit LTR390, SD. Difficulty: Level 2. Module family: LTR390 (UV Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ltr390_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LTR390",
        "components": [
            "Adafruit LTR390",
            "LED",
            "Buzzer"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: If UV index > 5, turn on a warning LED and buzzer. Target components: Adafruit LTR390, LED, Buzzer. Difficulty: Level 3. Module family: LTR390 (UV Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ltr390_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LTR390",
        "components": [
            "Adafruit LTR390",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display UV index on an OLED display, update every 2 seconds. Target components: Adafruit LTR390, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: LTR390 (UV Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ltr390_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "LTR390",
        "components": [
            "Adafruit LTR390",
            "Servo"
        ],
        "modality": "Light",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate a servo to adjust a shield rotate 30 degree if UV > 5. Target components: Adafruit LTR390, Servo. Difficulty: Level 3. Module family: LTR390 (UV Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "vl53l0x_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "VL53L0X",
        "components": [
            "VL53L0X"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Measure distance and display on serial monitor every second. Target components: VL53L0X. Difficulty: Level 1. Module family: VL53L0X (Laser Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "vl53l0x_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "VL53L0X",
        "components": [
            "VL53L0X"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Measure distance, light up LED if less than 70cm. Target components: VL53L0X. Difficulty: Level 2. Module family: VL53L0X (Laser Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "vl53l0x_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "VL53L0X",
        "components": [
            "VL53L0X",
            "SD"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log distance data to an SD card every 5 seconds. Target components: VL53L0X, SD. Difficulty: Level 3. Module family: VL53L0X (Laser Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "vl53l0x_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "VL53L0X",
        "components": [
            "VL53L0X",
            "SD"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Measure distance, light up LED if less than 70cm, and record the distance to SD card. Target components: VL53L0X, SD. Difficulty: Level 3. Module family: VL53L0X (Laser Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "vl53l0x_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "VL53L0X",
        "components": [
            "VL53L0X",
            "Servo"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate a servo to rotate 30 degree if distance changes less than 10cm. Target components: VL53L0X, Servo. Difficulty: Level 3. Module family: VL53L0X (Laser Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hc_sr04_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "HC-SR04",
        "components": [
            "HC-SR04"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Measure distance every second, output to serial monitor. Target components: HC-SR04. Difficulty: Level 1. Module family: HC-SR04 (Ultrasonic Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hc_sr04_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "HC-SR04",
        "components": [
            "HC-SR04"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Measure distance, if < 10 cm, activate a LED. Target components: HC-SR04. Difficulty: Level 2. Module family: HC-SR04 (Ultrasonic Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hc_sr04_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HC-SR04",
        "components": [
            "HC-SR04",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Measure distance, if < 20 cm, display 'Close' on OLED. Target components: HC-SR04, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: HC-SR04 (Ultrasonic Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hc_sr04_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HC-SR04",
        "components": [
            "HC-SR04",
            "SD"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log distance to an SD card every 5 seconds. Target components: HC-SR04, SD. Difficulty: Level 3. Module family: HC-SR04 (Ultrasonic Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hc_sr04_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HC-SR04",
        "components": [
            "HC-SR04",
            "Servo"
        ],
        "modality": "Distance",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Control servo angle to 30 degree based on distance measurements. Target components: HC-SR04, Servo. Difficulty: Level 3. Module family: HC-SR04 (Ultrasonic Distance Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pir_hc_sr501_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "PIR HC-SR501",
        "components": [
            "PIR"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Measure infrared data every second, output to serial monitor. Target components: PIR. Difficulty: Level 1. Module family: PIR HC-SR501 (Human Infrared Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pir_hc_sr501_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "PIR HC-SR501",
        "components": [
            "PIR"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Measure infrared data every second, if detect motion events turn on LED. Target components: PIR. Difficulty: Level 2. Module family: PIR HC-SR501 (Human Infrared Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pir_hc_sr501_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "PIR HC-SR501",
        "components": [
            "PIR",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate LED and rotate Servo 30 degress when motion detected. Target components: PIR, Servo. Difficulty: Level 3. Module family: PIR HC-SR501 (Human Infrared Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pir_hc_sr501_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "PIR HC-SR501",
        "components": [
            "PIR",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Show 'Detected' on OLED when motion detected. Target components: PIR, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: PIR HC-SR501 (Human Infrared Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pir_hc_sr501_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "PIR HC-SR501",
        "components": [
            "PIR",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log motion detection result to an SD card every 5 seconds. Target components: PIR, SD. Difficulty: Level 3. Module family: PIR HC-SR501 (Human Infrared Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mpu6050_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "MPU6050",
        "components": [
            "Adafruit MPU6050"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read acceleration data and output to serial monitor. Target components: Adafruit MPU6050. Difficulty: Level 1. Module family: MPU6050 (Accelerometer and Gyroscope). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mpu6050_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "MPU6050",
        "components": [
            "Adafruit MPU6050"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Filter noise from gyroscope data using a Kalman filter. Target components: Adafruit MPU6050. Difficulty: Level 2. Module family: MPU6050 (Accelerometer and Gyroscope). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mpu6050_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MPU6050",
        "components": [
            "Adafruit MPU6050",
            "SD"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log gyroscope data to an SD card every 3 seconds. Target components: Adafruit MPU6050, SD. Difficulty: Level 3. Module family: MPU6050 (Accelerometer and Gyroscope). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mpu6050_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MPU6050",
        "components": [
            "Adafruit MPU6050",
            "Servo"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: If accelerometer data detected changed, control the Servo rotate 30 degree. Target components: Adafruit MPU6050, Servo. Difficulty: Level 3. Module family: MPU6050 (Accelerometer and Gyroscope). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mpu6050_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MPU6050",
        "components": [
            "Adafruit MPU6050",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display real-time orientation on an OLED based on gyroscope data. Target components: Adafruit MPU6050, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: MPU6050 (Accelerometer and Gyroscope). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl345_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "ADXL345",
        "components": [
            "ADXL345_we accelerometer"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read acceleration data every second, display on serial monitor. Target components: ADXL345_we accelerometer. Difficulty: Level 1. Module family: ADXL345 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl345_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "ADXL345",
        "components": [
            "ADXL345_we accelerometer"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read acceleration data every second, detect movements, alert via LED. Target components: ADXL345_we accelerometer. Difficulty: Level 2. Module family: ADXL345 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl345_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADXL345",
        "components": [
            "ADXL345_we accelerometer",
            "SD"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record acceleration data, trigger LED if fall detected, and record on SD card. Target components: ADXL345_we accelerometer, SD. Difficulty: Level 3. Module family: ADXL345 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl345_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADXL345",
        "components": [
            "ADXL345_we accelerometer",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display on OLED the acceleration data upon sudden acceleration changes. Target components: ADXL345_we accelerometer, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: ADXL345 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl345_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADXL345",
        "components": [
            "ADXL345_we accelerometer",
            "Servo"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read acceleration data, when changes detected, rotate Servo to 30 degree. Target components: ADXL345_we accelerometer, Servo. Difficulty: Level 3. Module family: ADXL345 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl362_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "ADXL362",
        "components": [
            "ADXL362"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read acceleration data every second, output to serial monitor. Target components: ADXL362. Difficulty: Level 1. Module family: ADXL362 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl362_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "ADXL362",
        "components": [
            "ADXL362",
            "LED"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Detect free fall, blink an LED when detected. Target components: ADXL362, LED. Difficulty: Level 2. Module family: ADXL362 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl362_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADXL362",
        "components": [
            "ADXL362",
            "SD"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log acceleration data to an SD card every minute. Target components: ADXL362, SD. Difficulty: Level 3. Module family: ADXL362 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl362_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADXL362",
        "components": [
            "ADXL362",
            "Buzzer"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: If acceleration exceeds threshold, send signal to buzzer. Target components: ADXL362, Buzzer. Difficulty: Level 3. Module family: ADXL362 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "adxl362_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADXL362",
        "components": [
            "ADXL362",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Motion",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display X, Y, Z acceleration on an OLED screen, update every 5 seconds. Target components: ADXL362, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: ADXL362 (Accelerometer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hmc5883l_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "HMC5883L",
        "components": [
            "HMC5883L"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read magnetic field strength, display on serial monitor. Target components: HMC5883L. Difficulty: Level 1. Module family: HMC5883L (Magnetometer Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hmc5883l_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "HMC5883L",
        "components": [
            "HMC5883L"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log magnetic field changes, alert via LED if sudden spikes occur. Target components: HMC5883L. Difficulty: Level 2. Module family: HMC5883L (Magnetometer Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hmc5883l_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HMC5883L",
        "components": [
            "HMC5883L",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display magnetic field orientation on an OLED display. Target components: HMC5883L, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: HMC5883L (Magnetometer Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hmc5883l_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HMC5883L",
        "components": [
            "HMC5883L",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read magnetic field data if sudden spikes occur, control a servo rotate 20 degree. Target components: HMC5883L, Servo. Difficulty: Level 3. Module family: HMC5883L (Magnetometer Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hmc5883l_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HMC5883L",
        "components": [
            "HMC5883L",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read magnetic field data and store on SD card. Target components: HMC5883L, SD. Difficulty: Level 3. Module family: HMC5883L (Magnetometer Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "tcs34725_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "TCS34725",
        "components": [
            "Adafruit TCS34725"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read color values and display RGB on serial monitor. Target components: Adafruit TCS34725. Difficulty: Level 1. Module family: TCS34725 (Color Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "tcs34725_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "TCS34725",
        "components": [
            "Adafruit TCS34725"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Flash an LED in detected color using PWM signals. Target components: Adafruit TCS34725. Difficulty: Level 2. Module family: TCS34725 (Color Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "tcs34725_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "TCS34725",
        "components": [
            "Adafruit TCS34725",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read color data if red detected, control a servo rotate 20 degree. Target components: Adafruit TCS34725, Servo. Difficulty: Level 3. Module family: TCS34725 (Color Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "tcs34725_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "TCS34725",
        "components": [
            "Adafruit TCS34725",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log color data with timestamps to an SD card every 5 seconds. Target components: Adafruit TCS34725, SD. Difficulty: Level 3. Module family: TCS34725 (Color Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "tcs34725_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "TCS34725",
        "components": [
            "Adafruit TCS34725",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display detected color name on an OLED display in real-time. Target components: Adafruit TCS34725, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: TCS34725 (Color Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ina219_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "INA219",
        "components": [
            "Adafruit INA219"
        ],
        "modality": "Power",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read and display current value every second. Target components: Adafruit INA219. Difficulty: Level 1. Module family: INA219 (Current Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ina219_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "INA219",
        "components": [
            "Adafruit INA219"
        ],
        "modality": "Power",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read current if it exceeds 1A, turn on LED. Target components: Adafruit INA219. Difficulty: Level 2. Module family: INA219 (Current Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ina219_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "INA219",
        "components": [
            "Adafruit INA219"
        ],
        "modality": "Power",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Monitor current, activate buzzer if over 0.5A. Target components: Adafruit INA219. Difficulty: Level 3. Module family: INA219 (Current Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ina219_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "INA219",
        "components": [
            "Adafruit INA219",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Power",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log current if it exceeds 1A, display alert on OLED. Target components: Adafruit INA219, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: INA219 (Current Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ina219_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "INA219",
        "components": [
            "Adafruit INA219",
            "Servo"
        ],
        "modality": "Power",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Rotate servo to 30 degree if current draw drops below 0.5A for 2 seconds. Target components: Adafruit INA219, Servo. Difficulty: Level 3. Module family: INA219 (Current Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mq2_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "MQ2",
        "components": [
            "MQ2"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read alcohol concentration and output to serial monitor. Target components: MQ2. Difficulty: Level 1. Module family: MQ2 (Alcohol Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mq2_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "MQ2",
        "components": [
            "MQ2",
            "Buzzer"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate buzzer if alcohol concentration exceeds threshold. Target components: MQ2, Buzzer. Difficulty: Level 2. Module family: MQ2 (Alcohol Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mq2_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MQ2",
        "components": [
            "MQ2",
            "SD"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log alcohol readings to SD card every 30 seconds. Target components: MQ2, SD. Difficulty: Level 3. Module family: MQ2 (Alcohol Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mq2_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MQ2",
        "components": [
            "MQ2",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display alcohol levels on OLED display, updating every 10 seconds. Target components: MQ2, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: MQ2 (Alcohol Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mq2_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MQ2",
        "components": [
            "MQ2",
            "RGB LED"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Use alcohol sensor to control RGB LED color based on concentration levels. Target components: MQ2, RGB LED. Difficulty: Level 3. Module family: MQ2 (Alcohol Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sgp30_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "SGP30",
        "components": [
            "Adafruit SGP30"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read VOC index every 5 seconds, display on serial monitor. Target components: Adafruit SGP30. Difficulty: Level 1. Module family: SGP30 (VOX Gas Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sgp30_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "SGP30",
        "components": [
            "Adafruit SGP30",
            "Buzzer"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Sample air quality; trigger buzzer if VOC<5 detected. Target components: Adafruit SGP30, Buzzer. Difficulty: Level 2. Module family: SGP30 (VOX Gas Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sgp30_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SGP30",
        "components": [
            "Adafruit SGP30",
            "Servo"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Monitor VOC, activate servo rotate 20 degree if levels exceed 0. Target components: Adafruit SGP30, Servo. Difficulty: Level 3. Module family: SGP30 (VOX Gas Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sgp30_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SGP30",
        "components": [
            "Adafruit SGP30",
            "SD"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log VOC readings to an SD card every minute. Target components: Adafruit SGP30, SD. Difficulty: Level 3. Module family: SGP30 (VOX Gas Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sgp30_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SGP30",
        "components": [
            "Adafruit SGP30",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Gas",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display current VOC levels on OLED; update every 30 seconds. Target components: Adafruit SGP30, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: SGP30 (VOX Gas Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "apds_9960_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "APDS-9960",
        "components": [
            "Adafruit APDS9960"
        ],
        "modality": "Input",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Detect gestures and output to serial monitor. Target components: Adafruit APDS9960. Difficulty: Level 1. Module family: APDS-9960 (Gesture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "apds_9960_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "APDS-9960",
        "components": [
            "Adafruit APDS9960"
        ],
        "modality": "Input",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Detect gestures, if it is down, turn up the LED. Target components: Adafruit APDS9960. Difficulty: Level 2. Module family: APDS-9960 (Gesture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "apds_9960_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "APDS-9960",
        "components": [
            "Adafruit APDS9960",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Input",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Detect gestures and show on an OLED display. Target components: Adafruit APDS9960, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: APDS-9960 (Gesture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "apds_9960_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "APDS-9960",
        "components": [
            "Adafruit APDS9960",
            "Servo"
        ],
        "modality": "Input",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Control a servo direction using left and right gestures. Target components: Adafruit APDS9960, Servo. Difficulty: Level 3. Module family: APDS-9960 (Gesture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "apds_9960_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "APDS-9960",
        "components": [
            "Adafruit APDS9960",
            "SD"
        ],
        "modality": "Input",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Detect gestures and write to SD card module. Target components: Adafruit APDS9960, SD. Difficulty: Level 3. Module family: APDS-9960 (Gesture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "as5600_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "AS5600",
        "components": [
            "AS5600"
        ],
        "modality": "Magnetometer",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read angular position and output to serial monitor. Target components: AS5600. Difficulty: Level 1. Module family: AS5600 (Magnetic Encoder). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "as5600_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "AS5600",
        "components": [
            "AS5600",
            "Buzzer"
        ],
        "modality": "Magnetometer",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Alert via buzzer if rotation exceeds 180 degrees. Target components: AS5600, Buzzer. Difficulty: Level 2. Module family: AS5600 (Magnetic Encoder). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "as5600_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "AS5600",
        "components": [
            "AS5600",
            "Servo"
        ],
        "modality": "Magnetometer",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Control rotate servo 30 degree on angular position feedback. Target components: AS5600, Servo. Difficulty: Level 3. Module family: AS5600 (Magnetic Encoder). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "as5600_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "AS5600",
        "components": [
            "AS5600",
            "SSD1306 128 64 OLED"
        ],
        "modality": "Magnetometer",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display angular position on OLED screen in real-time. Target components: AS5600, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: AS5600 (Magnetic Encoder). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "as5600_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "AS5600",
        "components": [
            "AS5600",
            "SD"
        ],
        "modality": "Magnetometer",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log rotation data to SD card when position changes. Target components: AS5600, SD. Difficulty: Level 3. Module family: AS5600 (Magnetic Encoder). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dfrobot_moisture_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "DFRobot_moisture",
        "components": [
            "DFRobot_moisture"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read soil moisture level and print to serial monitor. Target components: DFRobot_moisture. Difficulty: Level 1. Module family: DFRobot_moisture (Soil Moisture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dfrobot_moisture_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "DFRobot_moisture",
        "components": [
            "DFRobot_moisture",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate a buzzer if moisture level drops below threshold. Target components: DFRobot_moisture, Buzzer. Difficulty: Level 2. Module family: DFRobot_moisture (Soil Moisture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dfrobot_moisture_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DFRobot_moisture",
        "components": [
            "DFRobot_moisture",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log soil moisture every hour to an SD card. Target components: DFRobot_moisture, SD. Difficulty: Level 3. Module family: DFRobot_moisture (Soil Moisture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dfrobot_moisture_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DFRobot_moisture",
        "components": [
            "DFRobot_moisture",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display moisture level on OLED; update every 5 minutes. Target components: DFRobot_moisture, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: DFRobot_moisture (Soil Moisture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "dfrobot_moisture_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DFRobot_moisture",
        "components": [
            "DFRobot_moisture",
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Control servo rotate based on moisture sensor readings. Target components: DFRobot_moisture, Servo. Difficulty: Level 3. Module family: DFRobot_moisture (Soil Moisture Sensor). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "max7219_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "MAX7219",
        "components": [
            "MATRIX7219"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display a static message 'O' on the dot matrix. Target components: MATRIX7219. Difficulty: Level 1. Module family: MAX7219 (Dot Matrix Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "max7219_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "MAX7219",
        "components": [
            "MATRIX7219",
            "BH1750"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Scroll text on dot matrix based on ambient light intensity. Target components: MATRIX7219, BH1750. Difficulty: Level 2. Module family: MAX7219 (Dot Matrix Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "max7219_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MAX7219",
        "components": [
            "MATRIX7219",
            "DS18B20 Temperature Sensor"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display temperature readings on dot matrix, update every minute. Target components: MATRIX7219, DS18B20 Temperature Sensor. Difficulty: Level 3. Module family: MAX7219 (Dot Matrix Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "max7219_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MAX7219",
        "components": [
            "MATRIX7219",
            "HC-SR501 PIR Motion Sensor"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Show different messages on dot matrix based on motion detection. Target components: MATRIX7219, HC-SR501 PIR Motion Sensor. Difficulty: Level 3. Module family: MAX7219 (Dot Matrix Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "max7219_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MAX7219",
        "components": [
            "MATRIX7219",
            "DHT11 Temperature/Humidity Sensor"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Cycle through display of humidity and temperature on dot matrix. Target components: MATRIX7219, DHT11 Temperature/Humidity Sensor. Difficulty: Level 3. Module family: MAX7219 (Dot Matrix Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sx1278_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "SX1278",
        "components": [
            "LoRa SX1278"
        ],
        "modality": "Communication",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Transmit a 'Hello World' message using LoRa. Target components: LoRa SX1278. Difficulty: Level 1. Module family: SX1278 (LoRa Communication Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sx1278_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "SX1278",
        "components": [
            "LoRa SX1278"
        ],
        "modality": "Communication",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Implement encryption on messages before transmission via LoRa. Target components: LoRa SX1278. Difficulty: Level 2. Module family: SX1278 (LoRa Communication Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sx1278_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SX1278",
        "components": [
            "LoRa SX1278",
            "DS18B20"
        ],
        "modality": "Communication",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Create a network of temperature sensors sending data to a central node. Target components: LoRa SX1278, DS18B20. Difficulty: Level 3. Module family: SX1278 (LoRa Communication Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sx1278_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SX1278",
        "components": [
            "LoRa SX1278",
            "PIR"
        ],
        "modality": "Communication",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Integrate PIR sensor to transmit PIR status over LoRa. Target components: LoRa SX1278, PIR. Difficulty: Level 3. Module family: SX1278 (LoRa Communication Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sx1278_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SX1278",
        "components": [
            "LoRa SX1278",
            "BH1750"
        ],
        "modality": "Communication",
        "description": "Write an Arduino-compatible embedded IoT program for this task: Create a network of light sensors sending data to a central node. Target components: LoRa SX1278, BH1750. Difficulty: Level 3. Module family: SX1278 (LoRa Communication Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "cc1101_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "CC1101",
        "components": [
            "CC1101"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Transmit a simple 'HELLO' message every 10 seconds. Target components: CC1101. Difficulty: Level 1. Module family: CC1101 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "cc1101_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "CC1101",
        "components": [
            "CC1101",
            "LED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Receive messages and light up an LED if message contains 'ON'. Target components: CC1101, LED. Difficulty: Level 2. Module family: CC1101 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "cc1101_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "CC1101",
        "components": [
            "CC1101",
            "DS18B20"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Send sensor data to a remote display using CC1101 module. Target components: CC1101, DS18B20. Difficulty: Level 3. Module family: CC1101 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "cc1101_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "CC1101",
        "components": [
            "CC1101",
            "AS5600",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Create a wireless door alarm system using magnetic sensors. Target components: CC1101, AS5600, Buzzer. Difficulty: Level 3. Module family: CC1101 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "cc1101_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "CC1101",
        "components": [
            "CC1101",
            "RGB LED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Wireless control of RGB LED based on received color commands. Target components: CC1101, RGB LED. Difficulty: Level 3. Module family: CC1101 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pn532_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "PN532",
        "components": [
            "PN532"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read NFC tag ID and output to serial monitor. Target components: PN532. Difficulty: Level 1. Module family: PN532 (NFC/RFID Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pn532_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "PN532",
        "components": [
            "PN532",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Check NFC tag against registered IDs, trigger buzzer if unauthorized. Target components: PN532, Buzzer. Difficulty: Level 2. Module family: PN532 (NFC/RFID Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pn532_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "PN532",
        "components": [
            "PN532",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log NFC tag reads to SD card. Target components: PN532, SD. Difficulty: Level 3. Module family: PN532 (NFC/RFID Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pn532_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "PN532",
        "components": [
            "PN532",
            "LED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Turn on an LED when a NFC tag is detected. Target components: PN532, LED. Difficulty: Level 3. Module family: PN532 (NFC/RFID Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "pn532_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "PN532",
        "components": [
            "PN532",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display ID on an OLED when a NFC tag is detected. Target components: PN532, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: PN532 (NFC/RFID Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "nrf24l01_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "nrf24l01",
        "components": [
            "nRF24L01"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Transmit a 'Hello World' message every 2 seconds. Target components: nRF24L01. Difficulty: Level 1. Module family: nrf24l01 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "nrf24l01_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "nrf24l01",
        "components": [
            "nRF24L01"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Send sensor data, apply simple encryption before transmission. Target components: nRF24L01. Difficulty: Level 2. Module family: nrf24l01 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "nrf24l01_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "nrf24l01",
        "components": [
            "nRF24L01",
            "DHT11"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Create a wireless sensor network to monitor temperature and humidity. Target components: nRF24L01, DHT11. Difficulty: Level 3. Module family: nrf24l01 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "nrf24l01_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "nrf24l01",
        "components": [
            "nRF24L01",
            "RGB LED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Wirelessly control RGB LEDs based on remote sensor input. Target components: nRF24L01, RGB LED. Difficulty: Level 3. Module family: nrf24l01 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "nrf24l01_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "nrf24l01",
        "components": [
            "nRF24L01",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Implement a wireless emergency button that triggers an alarm. Target components: nRF24L01, Buzzer. Difficulty: Level 3. Module family: nrf24l01 (Wireless Transceiver Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "relay_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "Relay",
        "components": [
            "Relay"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Turn on a relay and close it 5 seconds a loop. Target components: Relay. Difficulty: Level 1. Module family: Relay (Relay Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "relay_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "Relay",
        "components": [
            "Relay"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate relay for 5 seconds every time and show the status on serial. Target components: Relay. Difficulty: Level 2. Module family: Relay (Relay Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "relay_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "Relay",
        "components": [
            "Relay",
            "PIR"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate relay for 5 seconds every time HC-SR501 detects motion. Target components: Relay, PIR. Difficulty: Level 3. Module family: Relay (Relay Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "relay_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "Relay",
        "components": [
            "Relay",
            "DHT11"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Create a safety shutdown feature using a temperature sensor to trigger the relay. Target components: Relay, DHT11. Difficulty: Level 3. Module family: Relay (Relay Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "relay_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "Relay",
        "components": [
            "Relay",
            "PIR"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Automate LED lighting with motion detection to activate a relay. Target components: Relay, PIR. Difficulty: Level 3. Module family: Relay (Relay Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sg_90_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "SG-90",
        "components": [
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Rotate the servo to a defined position using a PWM signal. Target components: Servo. Difficulty: Level 1. Module family: SG-90 (Servo). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sg_90_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "SG-90",
        "components": [
            "Servo"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Implement a smooth sweeping motion between 0 deg and 180 deg with speed control. Target components: Servo. Difficulty: Level 2. Module family: SG-90 (Servo). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sg_90_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SG-90",
        "components": [
            "Servo",
            "DS18B20"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: If temperature bigger than 10C, control servo position rotate to 30 degree. Target components: Servo, DS18B20. Difficulty: Level 3. Module family: SG-90 (Servo). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sg_90_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SG-90",
        "components": [
            "Servo",
            "DHT11"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: If humidity bigger than 10%, control servo position rotate to 30 degree. Target components: Servo, DHT11. Difficulty: Level 3. Module family: SG-90 (Servo). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "sg_90_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "SG-90",
        "components": [
            "Servo",
            "SD",
            "DS18B20"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: If humidity bigger than 10%, control servo position rotate to 30 degree, and record on SD card. Target components: Servo, SD, DS18B20. Difficulty: Level 3. Module family: SG-90 (Servo). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds3231_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "DS3231",
        "components": [
            "DS3231"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display current time each minute on serial monitor. Target components: DS3231. Difficulty: Level 1. Module family: DS3231 (Real-Time Clock Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds3231_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "DS3231",
        "components": [
            "DS3231",
            "BH1750"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log time stamps when ambient light exceeds a threshold. Target components: DS3231, BH1750. Difficulty: Level 2. Module family: DS3231 (Real-Time Clock Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds3231_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DS3231",
        "components": [
            "DS3231",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Record current time and temperature on an SD card. Target components: DS3231, SD. Difficulty: Level 3. Module family: DS3231 (Real-Time Clock Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds3231_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DS3231",
        "components": [
            "DS3231",
            "SSD1306 OLED Display",
            "DHT22 Sensor"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display current time and temperature on an OLED display. Target components: DS3231, SSD1306 OLED Display, DHT22 Sensor. Difficulty: Level 3. Module family: DS3231 (Real-Time Clock Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ds3231_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "DS3231",
        "components": [
            "DS3231",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate a buzzer at set intervals based on DS3231 alarms. Target components: DS3231, Buzzer. Difficulty: Level 3. Module family: DS3231 (Real-Time Clock Module). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ads1115_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "ADS1115",
        "components": [
            "ADS1115"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read voltage and output to serial monitor. Target components: ADS1115. Difficulty: Level 1. Module family: ADS1115 (16-bit AD Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ads1115_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "ADS1115",
        "components": [
            "ADS1115"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Filter noise from a signal and output smoothed data to serial. Target components: ADS1115. Difficulty: Level 2. Module family: ADS1115 (16-bit AD Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ads1115_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADS1115",
        "components": [
            "ADS1115",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Monitor voltage, display status on an OLED when low. Target components: ADS1115, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: ADS1115 (16-bit AD Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ads1115_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADS1115",
        "components": [
            "ADS1115",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Monitor voltage, display status on an OLED when high. Target components: ADS1115, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: ADS1115 (16-bit AD Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ads1115_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "ADS1115",
        "components": [
            "ADS1115",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log voltage readings data to an SD card every 10 seconds. Target components: ADS1115, SD. Difficulty: Level 3. Module family: ADS1115 (16-bit AD Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hx711_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "HX711",
        "components": [
            "HX711"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Read voltage data and output to serial. Target components: HX711. Difficulty: Level 1. Module family: HX711 (ADC). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hx711_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "HX711",
        "components": [
            "HX711"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Filter noise from readings using a moving average. Target components: HX711. Difficulty: Level 2. Module family: HX711 (ADC). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hx711_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HX711",
        "components": [
            "HX711",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Display dynamic voltage changes on an OLED display. Target components: HX711, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: HX711 (ADC). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hx711_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HX711",
        "components": [
            "HX711",
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate a buzzer if voltage exceeds 1V. Target components: HX711, Buzzer. Difficulty: Level 3. Module family: HX711 (ADC). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "hx711_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "HX711",
        "components": [
            "HX711",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log readings to an SD card every 10 seconds. Target components: HX711, SD. Difficulty: Level 3. Module family: HX711 (ADC). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ad9833_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "AD9833",
        "components": [
            "AD9833"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Generate a 1 kHz sine wave output from AD9833. Target components: AD9833. Difficulty: Level 1. Module family: AD9833 (DDS). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ad9833_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "AD9833",
        "components": [
            "AD9833"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Generate a frequency sweep from 1 kHz to 10 kHz on AD9833. Target components: AD9833. Difficulty: Level 2. Module family: AD9833 (DDS). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ad9833_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "AD9833",
        "components": [
            "AD9833",
            "BH1750"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Generate a frequency based on ambient light intensity. Target components: AD9833, BH1750. Difficulty: Level 3. Module family: AD9833 (DDS). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ad9833_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "AD9833",
        "components": [
            "AD9833",
            "DHT11"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Generate a frequency based on huminity readings. Target components: AD9833, DHT11. Difficulty: Level 3. Module family: AD9833 (DDS). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "ad9833_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "AD9833",
        "components": [
            "AD9833",
            "DS18B20"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Output various waveforms based on temperature readings. Target components: AD9833, DS18B20. Difficulty: Level 3. Module family: AD9833 (DDS). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mcp4725_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "MCP4725",
        "components": [
            "MCP4725"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Output a fixed voltage level from the MCP4725. Target components: MCP4725. Difficulty: Level 1. Module family: MCP4725 (12-bit DA Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mcp4725_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "MCP4725",
        "components": [
            "MCP4725"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Generate a sine wave output using the MCP4725. Target components: MCP4725. Difficulty: Level 2. Module family: MCP4725 (12-bit DA Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mcp4725_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MCP4725",
        "components": [
            "MCP4725",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Generate a sine wave output and record on SD. Target components: MCP4725, SD. Difficulty: Level 3. Module family: MCP4725 (12-bit DA Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mcp4725_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MCP4725",
        "components": [
            "MCP4725",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Generate a sine wave output and display in OLED. Target components: MCP4725, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: MCP4725 (12-bit DA Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "mcp4725_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "MCP4725",
        "components": [
            "MCP4725",
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Output a voltage level and record on SD, if recorded turn on LED. Target components: MCP4725, SD. Difficulty: Level 3. Module family: MCP4725 (12-bit DA Converter). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "buzzer_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "Buzzer",
        "components": [
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Emit a continuous beep for 10 seconds. Target components: Buzzer. Difficulty: Level 1. Module family: Buzzer (Active Buzzer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "buzzer_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "Buzzer",
        "components": [
            "Buzzer"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Play a simple melody using the buzzer. Target components: Buzzer. Difficulty: Level 2. Module family: Buzzer (Active Buzzer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "buzzer_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "Buzzer",
        "components": [
            "Buzzer",
            "PIR"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Buzzer alerts when motion is detected. Target components: Buzzer, PIR. Difficulty: Level 3. Module family: Buzzer (Active Buzzer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "buzzer_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "Buzzer",
        "components": [
            "Buzzer",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Use buzzer for a countdown timer with display update every second. Target components: Buzzer, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: Buzzer (Active Buzzer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "buzzer_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "Buzzer",
        "components": [
            "Buzzer",
            "DS3231"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Activate buzzer based on real-time clock alarm setting. Target components: Buzzer, DS3231. Difficulty: Level 3. Module family: Buzzer (Active Buzzer). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "microsd_level1_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 1",
        "module": "microSD",
        "components": [
            "SD"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Save a random text file to microSD card with timestamp. Target components: SD. Difficulty: Level 1. Module family: microSD (SPI). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "microsd_level2_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 2",
        "module": "microSD",
        "components": [
            "SD",
            "DHT11"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Log temperature sensor data to microSD card. Target components: SD, DHT11. Difficulty: Level 2. Module family: microSD (SPI). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "microsd_level3_1",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "microSD",
        "components": [
            "SD",
            "Servo",
            "BME680"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Capture humidity, save to SD, if humidity>10%, rotate servo 20 degree. Target components: SD, Servo, BME680. Difficulty: Level 3. Module family: microSD (SPI). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "microsd_level3_2",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "microSD",
        "components": [
            "SD",
            "DHT11",
            "SSD1306 128 64 OLED"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Capture humidity, save to SD, display on OLED every 5 seconds. Target components: SD, DHT11, SSD1306 128 64 OLED. Difficulty: Level 3. Module family: microSD (SPI). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "microsd_level3_3",
        "source": "AutoEmbed / EmbedTask",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://raw.githubusercontent.com/AutoEmbed/AutoEmbed/main/backend/data/Example_tasks.json",
        "source_note": "Generated from the public AutoEmbed backend/data/Example_tasks.json task file and aligned with the AutoEmbed paper description of EmbedTask.",
        "difficulty": "Level 3",
        "module": "microSD",
        "components": [
            "SD",
            "Adafruit BME680",
            "PIR"
        ],
        "description": "Write an Arduino-compatible embedded IoT program for this task: Capture pressure data on SD card, trigger recording if motion detected by PIR sensor. Target components: SD, Adafruit BME680, PIR. Difficulty: Level 3. Module family: microSD (SPI). Input: connected hardware signals and configured board pins. Output: deployed firmware behavior matching the task description.",
        "expected_output": "Arduino-compatible sketch that compiles, can be flashed to a supported board, and produces the requested sensor, actuator, display, communication, storage, or serial behavior."
    },
    {
        "category": "Arduino",
        "name": "environmental_monitoring_case_study",
        "source": "AutoEmbed paper case study",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://arxiv.org/pdf/2412.09058",
        "source_note": "AutoEmbed paper case study: environmental monitoring system.",
        "difficulty": "Case Study",
        "module": "Environmental monitoring system",
        "components": [
            "Nano ESP32",
            "DHT11",
            "E32-900T30D LoRa",
            "SSD1306 OLED"
        ],
        "modality": "Environmental",
        "description": "Write an Arduino-compatible embedded IoT program for this case study: Develop an environmental monitoring system that polls the DHT11 sensor every second, transmits the temperature value to a server using the LoRa module, and updates the OLED display with the current temperature and LoRa transmission status. Hardware metadata: Nano ESP32 connected with DHT11 to Pin 3, LoRa module to Pins 4 and 5, and OLED display to Pins A4 and A5. Input: connected hardware signals, network credentials if needed, and configured board pins. Output: deployed firmware behavior matching the case study.",
        "expected_output": "Arduino-compatible sketch that compiles, flashes, and demonstrates the complete end-to-end hardware-in-the-loop behavior described in the paper case study."
    },
    {
        "category": "Arduino",
        "name": "remote_fan_control_case_study",
        "source": "AutoEmbed paper case study",
        "source_url": "https://autoembed.github.io/",
        "source_repository": "https://github.com/AutoEmbed/AutoEmbed",
        "source_dataset_url": "https://arxiv.org/pdf/2412.09058",
        "source_note": "AutoEmbed paper case study: remote fan control system.",
        "difficulty": "Case Study",
        "module": "Remote fan control system",
        "components": [
            "Nano RP2040",
            "HC-SR501 PIR",
            "Relay",
            "On-board Wi-Fi module",
            "Fan"
        ],
        "modality": "Automation",
        "description": "Write an Arduino-compatible embedded IoT program for this case study: Develop a remote control system that polls the PIR sensor every second, controls the fan via a relay, updates a web page with PIR status through the Wi-Fi module, and includes a master switch button on the web page to control system operation. Hardware metadata: Nano RP2040 connected with PIR to Pin 4, relay to Pin 5, and Wi-Fi module on-board. Input: connected hardware signals, network credentials if needed, and configured board pins. Output: deployed firmware behavior matching the case study.",
        "expected_output": "Arduino-compatible sketch that compiles, flashes, and demonstrates the complete end-to-end hardware-in-the-loop behavior described in the paper case study."
    }
];
