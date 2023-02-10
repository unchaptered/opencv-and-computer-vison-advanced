[< Backwards](../../README.md)

# Object Tracking

Object tracking typically has the following algorithms and can be used in different fields:<br>
KCF is fast, but the accuracy is low, and CSRT is the opposite.

1. Object Tracking with KCF
2. Object Tracking with CSRT Algorithm

<div style="display: flex; flex-direction: column;">
    <h3>EXAMPLE) Object Tracking with KCF</h3>
    <p>The KCF algorithm can only hold the whole body.<br>Also, fast-moving objects are more likely to fail tracking.</p>
    <div style="display: flex; gap: 10px;">
        <div style="width: 50%;">
            <span>Initialization</span>
            <img
                style="width: 400px;"
                src="../../images/results/001_KCF_Result.gif"/>
        </div>
        <div style="width: 50%;">
            <span>Detect <code>Entire Body</code></span>
            <img
                style="width: 400px;"
                src="../../images/results/002_KC4_Result_2.gif"/>
        </div>
    </div>
</div>
<br>
<div style="display: flex; flex-direction: column;">
    <h3>EXAMPLE) Object Tracking with CSRT</h3>
    <p>The CSRT algorithm can track all or part of the body.<br>Instead, tracking is slow.</p>
    <div style="display: flex; gap: 10px;">
        <div style="width: 50%;">
            <span>Detect <code>Entire Body</code></span>
            <img
                style="width: 400px;"
                src="../../images/results/003_CSRT_all_parts_of_body.gif"/>
        </div>
        <div style="width: 50%;">
            <span>Detect <code>Parts of Body</code></span>
            <img
                style="width: 400px;"
                src="../../images/results/004_CSRT_half_parts_of_body.gif"/>
        </div>
    </div>
</div>