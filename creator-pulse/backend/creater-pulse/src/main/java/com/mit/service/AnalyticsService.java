package com.mit.service;

import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;

@Service
public class AnalyticsService {

    public Map<String, Object> videoAnalysis(Map<String, Double> payload) {

        double ctr = payload.get("ctr");
        double ar = payload.get("ar");

        String result;


        if (ctr >= 1 && ctr < 10 && ar < 50) {
            result = "😟 Your video is struggling because not enough people are clicking, and those who do click are leaving too early. 🎯 To get more views, you must improve your thumbnail with high-contrast colors and a catchy title that makes people curious. ⏱️ At the same time, you need to fix your low retention by creating a strong opening hook in the first 30 seconds and cutting out any boring parts to keep the pacing fast. 🎬 By making your thumbnail more attractive and your content more engaging with better visuals, you will stop people from scrolling past and keep them watching until the end.";

        } else if (ctr >= 1 && ctr < 10 && ar >= 50) {
            result = "🔥 Your audience retention is excellent, which means people love watching your video once they click, but your thumbnail is working poorly because the click-through rate is very low. 🎨 Even though the video is good, your 'packaging' is failing to grab attention, so you need to improve your thumbnail immediately to stop people from scrolling past. 🧲 To fix this, update your thumbnail with high-contrast colors that pop, use close-up faces with strong emotions, and add bold, easy-to-read text limited to just 3 or 4 words. 🚀 When you make the thumbnail more catchy and clear, your high retention will help the algorithm push your video to a much larger audience.";

        } else if (ctr >= 10 && ctr < 15 && ar < 50) {
            result = "⚠️ To elevate your channel's performance, you should first refine your thumbnails with high-contrast imagery and bold text to further boost your already decent click-through rate, but your most critical task is fixing your low audience retention. ⏱️ You need to capture attention within the first five seconds and maintain momentum using dynamic visuals, B-roll, text overlays, and frequent transitions to prevent viewers from clicking away.";

        } else if (ctr >= 10 && ctr < 15 && ar >= 50) {
            result = "✨ Your audience retention is excellent, which shows that people really enjoy your content once they click, but your click-through rate is only decent and has room to grow. 🎯 Since you already have a great video that keeps people watching, your main focus should be upgrading your thumbnail to be more eye-catching and irresistible. 🔥 Improving contrast and curiosity in your titles will convert more impressions into views.";

        } else if (ctr >= 15 && ctr < 25 && ar < 50) {
            result = "🚀 Your click-through rate is excellent, which proves that your thumbnail and title are perfectly designed to grab attention and attract viewers; however, your audience retention is low, meaning people are skipping through or leaving the video early. 🎬 To fix this, improve your pacing with stronger hooks, sharper editing, and more dynamic transitions to keep viewers engaged from start to finish.";

        } else if (ctr >= 15 && ctr < 25 && ar >= 50) {
            result = "🏆 Your video is performing at a master level with both an excellent click-through rate and high audience retention, meaning you have successfully captured interest and kept people watching. 🔥 This is the perfect combination for viral growth, so analyze what worked and repeat this formula in your future content.";

        } else if (ctr >= 25 && ar < 50) {
            result = "⚡ Your click-through rate is incredibly high, which means your thumbnail and title are performing at an elite level and successfully pulling viewers in, but your audience retention is low because people are clicking away shortly after the video starts. 🎥 Focus on improving the first 30 seconds and strengthening your storytelling to hold attention.";

        } else if (ctr >= 25 && ar >= 50) {
            result = "👑 Your performance is at a legendary level! Both your click-through rate and audience retention are exceptionally high, which is the perfect formula for viral success. 🚀 Your thumbnail is magnetic, your content delivers, and your strategy is working flawlessly. Repeat this approach to dominate your niche.";
        } else {
            result = "ℹ️ Not enough data to analyze performance accurately.";
        }


        Map<String, Object> response = new HashMap<>();
        response.put("result", result);
        return response;
    }

    public Map<String, Object> shortAnalysis(Map<String, Double> payload) {

        double ar = payload.get("ar");
        double sa = payload.get("sa");


        String result;


        if (ar <= 20 && sa <= 40) {
            result = "🛑 Your Short is struggling because people are swiping away immediately and not watching until the end. You need a much stronger visual hook in the first 1 second to stop the scroll, and you must drastically improve your content pacing to keep people from leaving early.";

        } else if (ar <= 20 && sa >= 40) {
            result = "📉 Your hook is working well enough to get people to stop, but they are leaving almost immediately. This means your content isn't delivering on the promise of your intro. Focus on faster editing, adding more transitions, and getting straight to the point to keep them from dropping off.";

        } else if (ar >= 20 && ar <= 50 && sa <= 50) {
            result = "⚠️ Your retention is decent for those who stay, but too many people are swiping away at the very start. Your main priority should be the 'Visual Hook'—add bold text or a shocking visual in the first split-second to increase your 'Viewed' percentage and stop the swipe.";

        } else if (ar >= 20 && ar <=50 && sa >= 50) {
            result = "✨ You have a solid hook that stops people from swiping, but your retention drops off halfway through. To push this Short to more people, try adding more 'pattern interrupts' like text pop-ups or zooming in and out every few seconds to maintain interest until the end.";

        } else if (ar >= 50 && sa <= 50) {
            result = "🚀 The people who watch your Short love it and stay until the end, but your 'Viewed' rate is too low because your intro isn't catchy enough. You have high-quality content, so just fix that first second with a high-energy intro to unlock massive viral growth.";

        } else if (ar >= 50 && sa >= 50) {
            result = "👑 Legendary performance! You’ve mastered both the hook and the retention, which is the perfect formula for Shorts virality. People are stopping to watch and staying until the end. Analyze the structure of this Short and replicate it exactly to dominate the feed!";
        } else {
            result = "ℹ️ Not enough data to analyze performance accurately.";
        }

        Map<String, Object> response = new HashMap<>();
        response.put("result", result);
        return response;
    }
}
