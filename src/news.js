//import {computedFrom} from 'aurelia-framework';

export class News {
    constructor() {
        let feedURL = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=https://news.google.com/news?output=rss";
        let feedData = JSON.parse(this.Get(feedURL));
        
        this.feed = feedData.responseData.feed.entries;
        
        setInterval(() => {
            let feedURL = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=https://news.google.com/news?output=rss";
            let feedData = JSON.parse(this.Get(feedURL));
        
            this.feed = feedData.responseData.feed.entries;
        }, 60000) //update news every minute
    }
    
    decodeHtml(html) {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    
    Get(Url){
        var Httpreq = new XMLHttpRequest();
        
        Httpreq.onreadystatechange = function() {
        if(Httpreq.readyState==4 && Httpreq.status==200) {
            var content = Httpreq.responseText;
            if(content != '' && (content)) {
                return JSON.parse(content);
            } else {
                return false;
            }
        }
    }
        
        Httpreq.open("GET",Url,false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }
}
