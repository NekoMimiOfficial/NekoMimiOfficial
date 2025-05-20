<?php

function scrape_google_search($query) {
    // Prepare the Google search URL
    $url = "http://www.google.com/search?q=" . urlencode($query);

    // Set up HTTP headers
    $options = [
        "http" => [
            "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        ]
    ];

    // Create a stream context
    $context = stream_context_create($options);

    // Get the HTML content from the URL
    $html = file_get_contents($url, false, $context);

    // Check if HTML was fetched successfully
    if ($html === FALSE) {
        die("Error fetching data from Google.");
    }

    // Load HTML into a DOM parser
    $dom = new DOMDocument();
    @$dom->loadHTML($html); // Suppress warnings due to malformed HTML

    // Create an array to hold results
    $results = [];

    // Use XPath to extract relevant data
    $xpath = new DOMXPath($dom);
    
    // Find all search result containers
    $nodes = $xpath->query('//div[@class="g"]');

    foreach ($nodes as $node) {
        $titleNode = $xpath->query('.//h3', $node);
        $linkNode = $xpath->query('.//a', $node);
        $snippetNode = $xpath->query('.//span[@class="aCOpRe"]', $node);

        $title = $titleNode->length > 0 ? trim($titleNode->item(0)->nodeValue) : '';
        $link = $linkNode->length > 0 ? trim($linkNode->item(0)->getAttribute('href')) : '';
        $snippet = $snippetNode->length > 0 ? trim($snippetNode->item(0)->nodeValue) : '';

        if ($title && $link) {
            $results[] = [
                'title' => $title,
                'link' => $link,
                'snippet' => $snippet
            ];
        }
    }

    return $results;
}

// Example usage
$query = "example search";
$results = scrape_google_search($query);

// Output the results
foreach ($results as $result) {
    echo "Title: " . htmlspecialchars($result['title']) . "\n";
    echo "Link: " . htmlspecialchars($result['link']) . "\n";
    echo "Snippet: " . htmlspecialchars($result['snippet']) . "\n\n";
}
?>
