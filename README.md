# AlertBox
Stop alerting! Start AlertBoxing! 

Fully customizable, responsive and cross-browser Javascript plugin that will help you get rid of alert boxes.

#Example

See example here: http://liocrea.com/alertBox

#How To Use It

Two ways:

1. Link the script to your page. 

<code><pre>
&lt;script src=&quot;http://liocrea.com/alertBox/alertBox-v1.1.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;http://liocrea.com/alertBox/alertBox-v1.1.min.js&quot;&gt;&lt;/script&gt;
</pre></code>
2. Download and save the script straight to your target.

Then call the plugin by using alertBox(arg1,arg2,arg3); where:


- arg1 refers to type
- arg2 refers to the message to be displayed
- arg3 refers to a crosshair

--

The only required argument is arg2, which corresponds to the text message you want to display. 

arg1 refers to a pre-customed type: warning or thank you message at the moment.

arg3 refers to a cross hair you can use to close the message. This argument is set to true per default.
If set to false, the cross hair won't appear.

Example:

<code><pre>
alertBox(
		type= 'warning',
		myMessage= 'This field cannot be empty!',
		crossHair= false
);
</pre></code>

Is equivalent to:

<code><pre>
alertBox('warning','This field cannot be empty!', false);
</pre></code>

It means: I want to display a warning message that says "this field cannot be empty" and I don't want to use a crosshair.

This example:

<code><pre>
alertBox('This field cannot be empty!');
</pre></code>

will result in a default box (grey colored), with a cross-hair set to true.
