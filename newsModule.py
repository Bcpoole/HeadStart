import urllib2
import feedparser

def main():
    #googleNews = urllib2.urlopen("https://news.google.com/news?output=rss")
    feed = feedparser.parse("https://news.google.com/news?output=rss")

    for post in feed.entries:
        print(post.title)
        print(post.published)
        print(post.description)
        print("")

if __name__ == '__main__':
    main()